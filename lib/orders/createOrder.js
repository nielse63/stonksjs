const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');
const validateOptions = require('../helpers/validateOptions');

const requiredFields = [
  'symbol',
  'qty',
  'limit_price',
  'side',
];

const defaults = {
  type: 'limit',
  time_in_force: 'day',
  // symbol: undefined,
  // qty: undefined,
  // limit_price: undefined,
  // side: undefined,
};

module.exports = async (options = {}) => {
  const settings = {
    ...defaults,
    ...options,
  };
  validateOptions(settings, requiredFields);
  const response = await alpaca.createOrder(settings);
  return parseResponse(response);
};
