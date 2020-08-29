/**
 * Stock screener and company data from finviz
 * @module @stonksjs/finviz
 * @typicalname finviz
 */
const Finviz = require('./lib/Finviz');

const finviz = new Finviz();

module.exports = {
  /**
   * Get detailed company financial data
   *
   * @example
   * const data = await finviz.quote('MSFT') // {Promise<object>}
   *
   * @param {string} symbol - ticker symbol of the company
   * @returns {Promise} - resolves to a plain object, rejects with an Error
   * @fulfil {object} - company financial data
   * @reject {Error}
   */
  async quote(symbol) {
    return finviz.getQuote(symbol);
  },

  /**
   * Get ticker symbols from the results of a custom finviz screener
   *
   * @example
   * const symbols = await finviz.search('https://finviz.com/screener.ashx?v=111&s=ta_topgainers') // {Promise<string[]>}
   *
   * @param {string} finvizUrl - the url from the screener page you want to query
   * @returns {Promise} - resolves to an array of strings, rejects with an Error
   * @fulfil {string[]} - array of ticker symbols for each row of results
   * @reject {Error}
   */
  async search(finvizUrl) {
    return finviz.getScreenerResults(finvizUrl);
  },
};
