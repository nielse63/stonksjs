const createOrder = require('../orders/createOrder');
const parseResponse = require('../helpers/parseResponse');

module.exports = async (side, symbol, qty, price, options = {}) => {
  const response = await createOrder({
    ...options,
    symbol,
    qty,
    limit_price: price,
    side,
  });
  return parseResponse(response);
};
