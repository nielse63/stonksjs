const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

module.exports = async () => {
  const positions = await alpaca.getPositions();
  return parseResponse(positions);
};
