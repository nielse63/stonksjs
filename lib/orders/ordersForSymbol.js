const getOpenOrders = require('./getOpenOrders');

module.exports = async (symbol) => {
  const openOrders = await getOpenOrders();
  const ordersForSymbol = openOrders.filter((order) => order.symbol === symbol);
  return ordersForSymbol;
};
