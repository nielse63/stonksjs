const StonksAPI = require('./StonksAPI');
const _ = require('lodash');

/**
 * Handles requests to get fundamental data for a single asset
 *
 * @class
 * @extends {StonksAPI}
 * @example
 * const { StonksFundamentalsAPI } = require('@stonksjs/api');
 *
 * const api = new StonksFundamentalsAPI('MSFT');
 * const quotes = await api.get();
 */
class StonksFundamentalsAPI extends StonksAPI {
  static dataKeyConversionHash = {
    Beta: 'beta',
    Ch: 'change',
    Chp: 'changePercent',
    Cmp: 'fullCompanyName',
    Cur: 'currency',
    Dh: 'dailyHigh',
    Dl: 'dailyLow',
    DvRt: 'dividendRate',
    Dy: 'dividendYield',
    Eps: 'eps',
    Eqsm: 'symbol',
    FpEPS: 'forwardPe',
    FrNm: 'name',
    Ind: 'industry',
    It: 'assetType',
    LoczExName: 'exchange',
    Lp: 'lastPrice',
    Pe: 'peRatio',
    PrCh1Mo: 'priceChange1Mo',
    PrCh3Mo: 'priceChange3Mo',
    PrCh6Mo: 'priceChange6Mo',
    Sec: 'sector',
    V: 'volume',
    Yh: 'yearHigh',
    Yl: 'yearLow',
    avgV: 'averageVolume',
    tz: 'timezone',
    Ask: 'askPrice',
    AskSize: 'askSize',
    Bid: 'bidPrice',
    BidSize: 'bidSize',
    Op: 'openingPrice',
    Pp: 'previousClosePrice',
    YTD: 'yearToDateChange',
    market: 'market',
  };

  /**
   * Creates an instance of StonksFundamentalsAPI.
   *
   * @param {string} symbol - Ticker symbol to get data for
   */
  constructor(symbol) {
    if (!symbol) {
      throw new Error('symbol is undefined');
    }
    const options = {
      headers: {
        Referer: 'https://www.msn.com/en-us/money/stockdetails/fi-a2f4r7',
      },
    };
    super(options);
    this.symbol = symbol.toUpperCase();
  }

  /**
   * Parses the api response into a standard plain object
   *
   * @returns {Fundamentals} - Fundamental data object
   */
  toJSON() {
    const quoteObject = _.get(this, 'response.data[0].Quotes', {});
    const dataKeys = StonksFundamentalsAPI.dataKeyConversionHash;
    const parsedObject = _.pick(quoteObject, Object.keys(dataKeys));
    return Object.entries(parsedObject).reduce((output, [key, value]) => {
      const newKey = dataKeys[key];
      return {
        ...output,
        [newKey]: value,
      };
    }, {});
  }

  /**
   * Fetch data for the instance symbol
   *
   * @returns {Promise} - Resolves a Fundamental data object
   * @fulfil {Fundamentals}
   * @reject {Error}
   */
  async get() {
    const url = `https://finance-services.msn.com/Market.svc/ChartAndQuotes?symbols=126.1.${this.symbol}&lang=en-US&chartType=1y`;
    this.response = await super.get(url);
    return this.toJSON();
  }
}

module.exports = StonksFundamentalsAPI;
