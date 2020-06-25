const Alpaca = require('@alpacahq/alpaca-trade-api');
const dataForge = require('data-forge');
require('data-forge-indicators');
const {
  formatISO,
  toDate,
} = require('date-fns');
const _ = require('lodash');

class Asset {
  static MAX_HISTORY_COUNT = 1000;

  constructor(symbol, alpacaCreds = {}, options = {}) {
    if (!symbol) {
      throw new Error('`symbol` is undefined');
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
    this.lastPrice = [];
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
      const series = new dataForge.DataFrame(array)
        .transformSeries({
          startEpochTime: (value) => toDate(value * 1000),
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
      if (_.isEmpty(this.history)) {
        this.history = await this.getHistory();
      }
      return this.history.map(({ close }) => close);
    } catch (error) {
      console.error(error);
    }
    return [];
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

  async calcSMA(period) {
    if (!period) {
      throw new Error('`period` is undefined');
    }

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
}

module.exports = Asset;
