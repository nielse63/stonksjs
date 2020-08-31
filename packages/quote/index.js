/**
 * Detailed real-time stock data
 *
 * @module @stonksjs/quote
 * @typicalname quote
 */
const finviz = require('@stonksjs/finviz');

/**
 * Executes `@stocksjs/finviz` quote method to get detailed data
 *
 * @param {string} symbol - ticker symbol of the asset
 * @returns {Promise<object>} - data about the stock
 * @see {@link https://nielse63.github.io/stonksjs/#/api/finviz?id=response-schema|@stonksjs/finviz.quote}
 * @example
 * const quote = require('@stonksjs/quote');
 *
 * const data = await quote('MSFT'); // object of financial data
 */
const quote = async (symbol) => {
  const response = await finviz.quote(symbol);
  return response;
};

module.exports = quote;
