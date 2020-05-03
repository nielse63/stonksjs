const _ = require('lodash');
const getPosition = require('../positions/getPosition');

module.exports = async (symbol, history = []) => {
  if (!history.length) {
    throw new Error(`No history provided for ${symbol}`);
  }
  const position = await getPosition(symbol);
  const { EMA5, EMA12 } = _.last(history);
  return !position && EMA5 > EMA12;
};
