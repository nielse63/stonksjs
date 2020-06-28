const algotrader = require('algotrader');
const _ = require('lodash');

const { Data } = algotrader;
const { Yahoo } = Data;

class Asset {
  static MAX_HISTORY_COUNT = 1000;

  constructor(symbol, options = {}) {
    if (!symbol) {
      throw new Error('`symbol` is undefined');
    }

    const {
      range = '5y',
      interval = '1d',
    } = options;
    this.symbol = symbol;
    this.options = options;
    this.interval = interval;
    this.range = range;
    this.history = [];
    this.lastPrice = 0;
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
      const bars = await Yahoo.getQuotes(
        this.symbol,
        this.range,
        this.interval,
        false,
      );
      this.history = bars.map((quote) => ({
        ...quote.price,
        time: quote.date,
      }));
    } catch (error) {
      // console.error(error);
      this.history = [];
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
