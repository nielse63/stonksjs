const RobinhoodAccount = require('./objects/RobinhoodAccount');
const RobinhoodOrder = require('./objects/RobinhoodOrder');

module.exports = (user, password, deviceToken) => {
  const account = new RobinhoodAccount(user, password, deviceToken);
  const orderFactory = (side) => async (symbol, options) => {
    const order = new RobinhoodOrder(account.user, {
      side,
      symbol,
      ...options,
    });
    const response = await order.submit();
    return response;
  };

  return {
    authenticate: account.authenticate,
    getBuyingPower: account.getBuyingPower,
    buy: orderFactory('buy'),
    sell: orderFactory('sell'),
  };
};
