const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

module.exports = async (symbol) => {
  try {
    const position = await alpaca.getPosition(symbol);
    return parseResponse(position);
  } catch (error) {
    console.error(error);
  }
  return null;
};
