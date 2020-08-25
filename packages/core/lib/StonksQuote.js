const _ = require('lodash');
const toDate = require('date-fns/toDate');
const StonksRequest = require('./StonksRequest');

class StonksQuote {
  static metaKeys = [
    'symbol',
    'currency',
    'exchangeName',
    'instrumentType',
    'firstTradeDate',
    'regularMarketTime',
    'timezone',
    'exchangeTimezoneName',
    'regularMarketPrice',
    'chartPreviousClose',
    'previousClose',
  ]

  static jsonKeys = [
    ...StonksQuote.metaKeys,
    'source',
    'price',
    'date',
  ]

  constructor(symbol, options = {}) {
    this.description = 'Object representing the data of a given security';
    if (!symbol) {
      throw new Error('Symbol must be defined');
    }
    this.symbol = symbol.toUpperCase();
    this.date = new Date();
    this.source = 'finance.yahoo.com';
    this.currency = '';
    this.exchangeName = '';
    this.instrumentType = '';
    this.firstTradeDate = '';
    this.regularMarketTime = '';
    this.gmtoffset = '';
    this.timezone = '';
    this.exchangeTimezoneName = '';
    this.regularMarketPrice = '';
    this.chartPreviousClose = '';
    this.previousClose = '';
    this.price = {
      open: 0,
      high: 0,
      low: 0,
      close: 0,
      volume: 0,
      last: 0,
    };
    this.options = {
      range: '1d',
      interval: '1m',
      ...options,
    };
  }

  async getFundamentals() {
    try {
      const request = new StonksRequest(`https://query1.finance.yahoo.com/v8/finance/chart/${this.symbol}?region=US&lang=en-US&includePrePost=false&interval=${this.options.interval}&range=${this.options.range}&corsDomain=finance.yahoo.com&.tsrc=finance`);
      const response = await request.fetch();
      const results = _.get(response, 'data.chart.result[0]', {});
      const meta = _.get(results, 'meta', {});
      const indicators = _.get(results, 'indicators.quote[0]', {});
      const timestamp = _.get(results, 'timestamp', []).pop();
      const low = _.get(indicators, 'low', [0]).pop();
      const volume = _.get(indicators, 'volume', [0]).pop();
      const close = _.get(indicators, 'close', [0]).pop();
      const open = _.get(indicators, 'open', [0]).pop();
      const high = _.get(indicators, 'high', [0]).pop();
      const last = meta.regularMarketPrice;
      this.price = {
        low,
        volume,
        close,
        open,
        high,
        last,
      };
      this.date = toDate(timestamp * 1000);
      StonksQuote.metaKeys.forEach((key) => {
        const value = _.get(meta, key);
        if (value) {
          this[key] = value;
        }
      });
    } catch (error) {
      console.error(error);
    }
    return this.toJSON();
  }

  toJSON() {
    return StonksQuote.jsonKeys.reduce((output, key) => ({
      ...output,
      [key]: this[key],
    }), {});
  }
}

module.exports = StonksQuote;
