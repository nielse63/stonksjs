const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

const defaults = {
  status: 'all', // open, closed, all
  // after: Date,
  // until: Date,
  // limit: number,
  direction: 'asc',
};

module.exports = async (options = {}) => {
  const response = await alpaca.getOrders({
    ...defaults,
    ...options,
  });
  return parseResponse(response);
};
