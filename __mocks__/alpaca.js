const account = require('./account');
const bars = require('./bars');
const orders = require('./orders');
const positions = require('./positions');

module.exports = {
  getAccount() {
    return Promise.resolve(account);
  },
  getBars() {
    return Promise.resolve(bars);
  },
  cancelAllOrders() {
    return Promise.resolve();
  },
  createOrder() {
    return Promise.resolve(orders[0]);
  },
  getOrders() {
    return Promise.resolve(orders);
  },
  getOrder() {
    return Promise.resolve(orders[0]);
  },
  getPositions() {
    return Promise.resolve(positions);
  },
  getPosition() {
    return Promise.resolve(positions[0]);
  },
};
