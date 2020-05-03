const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

module.exports = async () => {
  const response = await alpaca.cancelAllOrders();
  return parseResponse(response);
};
