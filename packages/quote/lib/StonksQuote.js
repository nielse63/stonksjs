const { StonksFundamentalsAPI } = require('@stonksjs/api');
const isEmpty = require('lodash/isEmpty');

/**
 * Object representing a single financial instrument, given a valid ticker symbol is provided
 *
 * @class
 * @example
 * const StonksQuote = require('@stonksjs/quote');
 *
 * const quote = new StonksQuote('MSFT');
 * const fundamentals = await quote.getFundamentals();
 */
class StonksQuote {
  /**
   * Creates an instance of StonksQuote.
   *
   * @param {string} symbol - Ticker symbol for instrument
   */
  constructor(symbol) {
    if (!symbol) {
      throw new Error('Symbol must be defined');
    }
    this.symbol = symbol.toUpperCase();
    this.fundamentals = {};
  }

  /**
   * Request the latest fundamentals data from [MSN Money]{@link https://www.msn.com/en-us/money}
   *
   * @param {boolean} [refresh=false] - Whether or not to force a new request
   * @returns {Fundamentals} - A {@link Fundamentals} object with data for the instrument
   */
  async getFundamentals(refresh = false) {
    if (!refresh && !isEmpty(this.fundamentals)) {
      return this.fundamentals;
    }
    try {
      const api = new StonksFundamentalsAPI(this.symbol);
      this.fundamentals = await api.fetch();
    } catch (error) {
      console.error(error);
    }
    return this.fundamentals;
  }
}

module.exports = StonksQuote;
