/**
 * Functions used to interaact with Robinhood
 * @module robinhood
 * @memberof stonksjs
 */
const RobinhoodAccount = require('./objects/RobinhoodAccount');
const RobinhoodOrder = require('./objects/RobinhoodOrder');

const account = new RobinhoodAccount();

module.exports = {
  /**
   * An instance of the RobinhoodAccount class
   * @type {RobinhoodAccount}
   */
  account,
  /**
   * Get buying power in your Robinhood account
   * @function
   * @returns {Promise<number>} Available buying power
   */
  getBuyingPower: account.getBuyingPower,
  /**
   * Buy an equity
   * @param {string} symbol - Ticker symbol for the stock
   * @param {object} options - Pptions passed to order
   * @returns {Promise<object>} The order response object
   */
  buy: async (symbol, options = {}) => {
    const order = new RobinhoodOrder(account.user);
    return order.buy(symbol, options);
  },
  /**
   * Sell an equity
   * @param {string} symbol - Ticker symbol for the stock
   * @param {object} options - Pptions passed to order
   * @returns {Promise<object>} The order response object
   */
  sell: async (symbol, options = {}) => {
    const order = new RobinhoodOrder(account.user);
    return order.sell(symbol, options);
  },
};
