/**
 * Stock screener functions
 * @module screeners
 * @memberof stonksjs
 */
const finviz = require('./finviz');
const robinhood = require('./robinhood');
const dividends = require('./dividends');

module.exports = {
  /**
   * Scrapes the finviz.com screener to return an array of ticker symbols
   *
   * @function
   * @param {string} url - The URL of the screener. Must be a full URL string.
   * @returns {Promise<string[]>} - array of ticker symbols
   */
  finviz,

  /**
   * Pulls symbols from any of Robinhood collections pages
   *
   * @function
   * @param {string} url - The URL of the screener. Must be a full URL string.
   * @returns {Promise<string[]>} - array of ticker symbols
   */
  robinhood,

  /**
   * Gets the latest entries on the dividendvaluebuilder.com site
   *
   * @function
   * @param {string} url - The URL of the screener. Must be a full URL string.
   * @returns {Promise<string[]>} - array of ticker symbols
   */
  dividends,
};
