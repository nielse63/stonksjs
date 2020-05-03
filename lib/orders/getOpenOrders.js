const getOrders = require('./getOrders');

module.exports = async () => {
  const orders = await getOrders({ status: 'open' });
  return orders;
};
