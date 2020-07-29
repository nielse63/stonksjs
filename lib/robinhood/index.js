const RobinhoodAccount = require('./objects/RobinhoodAccount');
const RobinhoodOrder = require('./objects/RobinhoodOrder');

module.exports = async (username, password, deviceToken) => {
  const account = new RobinhoodAccount(username, password, deviceToken);
  await account.authenticate();
  const orderFactory = (user, side) => async (symbol, options) => {
    const order = new RobinhoodOrder(user, {
      side,
      symbol,
      ...options,
    });
    return order;
  };

  return {
    getBuyingPower: account.getBuyingPower,
    buy: orderFactory(account.user, 'buy'),
    sell: orderFactory(account.user, 'sell'),
  };
};
