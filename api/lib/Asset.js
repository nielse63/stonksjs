const Alpaca = require('@alpacahq/alpaca-trade-api');
const dataForge = require('data-forge');
require('data-forge-indicators');
const algotrader = require('algotrader');
const {
  formatISO,
  toDate,
} = require('date-fns');
const _ = require('lodash');

const { Data } = algotrader;

class Asset {
  static MAX_HISTORY_COUNT = 1000;

  constructor(symbol, alpacaCreds = {}, options = {}) {
    if (!symbol) {
      throw new Error('`symbol` is undefined');
    }

    if (
      !alpacaCreds
      || !alpacaCreds.keyId
      || !alpacaCreds.secretKey
      || !alpacaCreds.paper
    ) {
      throw new Error('`alpacaCreds` is missing one or more value');
    }

    this.symbol = symbol;
    this.options = options;
    this.interval = options.interval || 'day';
    this.alpaca = new Alpaca({
      keyId: alpacaCreds.keyId,
      secretKey: alpacaCreds.secretKey,
      paper: alpacaCreds.paper,
      usePolygon: false,
    });
    this.history = [];
    this.lastPrice = 0;
  }

  static parseBarObject(barObject) {
    const {
      startEpochTime,
      openPrice,
      highPrice,
      lowPrice,
      closePrice,
      volume,
    } = barObject;
    const date = toDate(startEpochTime * 1000);
    const time = formatISO(date);
    return {
      time,
      open: openPrice,
      high: highPrice,
      low: lowPrice,
      close: closePrice,
      volume,
    };
  }

  static setIndicatorValue({ object, key, period }) {
    const newObject = { ...object };
    const value = newObject[key];
    if (!newObject.sma) {
      newObject.sma = {};
    }
    newObject.sma[period] = value;
    delete newObject[key];
    return newObject;
  }

  async getHistory() {
    if (!_.isEmpty(this.history)) {
      return this.history;
    }

    try {
      const response = await this.alpaca.getBars(
        this.interval,
        this.symbol,
        { limit: Asset.MAX_HISTORY_COUNT },
      );
      const array = response[this.symbol];
      console.log(array.length);
      const series = new dataForge.DataFrame(array)
        .transformSeries({
          startEpochTime: (value) => formatISO(toDate(value * 1000)),
        })
        .setIndex('startEpochTime')
        .renameSeries({
          startEpochTime: 'time',
          openPrice: 'open',
          highPrice: 'high',
          lowPrice: 'low',
          closePrice: 'close',
        });
      this.history = series.toArray();
    } catch (error) {
      console.error(error);
    }
    return this.history;
  }

  async getCloseValues() {
    try {
      const history = await this.getHistory();
      return history.map(({ close }) => close);
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  async getLastPrice() {
    try {
      const closeValues = await this.getCloseValues();
      this.lastPrice = _.last(closeValues);
    } catch (error) {
      console.error(error);
    }
    return this.lastPrice;
  }

  async calcSMA(period = 20) {
    const history = await this.getHistory();
    const series = new dataForge.DataFrame(history).setIndex('time');

    const smaSeries = series
      .deflate((bar) => bar.close)
      .sma(period);
    const key = `sma${period}`;
    this.history = series
      .withSeries(key, smaSeries)
      .skip(period)
      .toArray()
      .map((object) => Asset.setIndicatorValue({ object, key, period }));

    return this.history;
  }

  async toJSON() {
    try {
      const searchResults = await Data.Query.search(this.symbol);
      const {
        name = '',
        typeDisp = '',
      } = searchResults.find((object) => object.symbol === this.symbol);
      const type = typeDisp.toLowerCase();
      const json = {
        symbol: this.symbol,
        name,
        type,
        history: await this.getHistory(),
        lastPrice: await this.getLastPrice(),
      };
      return json;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}

module.exports = Asset;
