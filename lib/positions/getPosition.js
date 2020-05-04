const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

module.exports = async (symbol) => {
  try {
    const position = await alpaca.getPosition(symbol);
    return parseResponse(position);
  } catch (error) {
    if (error && error.statusCode !== 404) {
      console.error(error.message);
    }
  }
  return null;
};
