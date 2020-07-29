const RobinhoodAccount = require('./objects/RobinhoodAccount');
const RobinhoodOrder = require('./objects/RobinhoodOrder');

const account = new RobinhoodAccount();

/**
 * Functions used to interaact with Robinhood
 *
 * @namespace robinhood
 * @example
 * const { robinhood } = require('stonksjs');
 * await robinhood.account.authenticat();
 * const order = await robinhood.buy('MSFT', {  qty: 100 });
 */
const robinhood = {
  account,
  getBuyingPower: this.account.getBuyingPower,
  buy: async (...args) => {
    const order = new RobinhoodOrder(account.user);
    return order.buy(...args);
  },
  sell: async (...args) => {
    const order = new RobinhoodOrder(account.user);
    return order.sell(...args);
  },
};

module.exports = robinhood;
