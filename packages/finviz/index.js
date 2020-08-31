/**
 * Stock screener and company data from finviz
 * @module @stonksjs/finviz
 * @typicalname finviz
 */
const quote = require('./lib/quote');
const screener = require('./lib/screener');

module.exports = {
  /**
   * Get detailed company financial data
   *
   * @example
   * const data = await quote('MSFT') // {Promise<object>}
   *
   * @param {string} symbol - ticker symbol of the company
   * @returns {Promise} - resolves to a plain object, rejects with an Error
   * @fulfil {object} - company financial data
   * @reject {Error}
   */
  async quote(symbol) {
    return quote(symbol);
  },

  /**
   * Get ticker symbols from the results of a custom finviz screener
   *
   * @example
   * const symbols = await screener('https://finviz.com/screener.ashx?v=111&s=ta_topgainers') // {Promise<string[]>}
   *
   * @param {string} url - the url from the screener page you want to query
   * @returns {Promise} - resolves to an array of strings, rejects with an Error
   * @fulfil {string[]} - array of ticker symbols for each row of results
   * @reject {Error}
   */
  async screener(url) {
    return screener(url);
  },
};
