/**
 * Pre-defined industry standard stock screeners from MSN Money
 * @module @stonksjs/stock-screener
 * @typicalname stockScreener
 */
const StockScreener = require('./lib/StockScreener');

const screener = new StockScreener();

module.exports = {
  /**
   * @property {string[]} - array of pre-defined stock screener names
   */
  screens: StockScreener.listScreens(),

  /**
   * Fetch the latest results from the stock screener
   *
   * @example
   * const symbols = await stockScreener.get('highYieldDividends');
   *
   * @param {string} filterName - the name of the screener to search
   * @returns {Promise} - the latest screener data or an error
   * @fulfil {string[]} - array of ticket symbols
   * @reject {Error}
   */
  async get(filterName) {
    return screener.getScreenerResults(filterName);
  },
};
