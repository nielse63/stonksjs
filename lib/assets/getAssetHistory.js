const alpaca = require('../alpaca');
const parseAssetData = require('../helpers/parseAssetData');
const calculateEma = require('./calculateEma');

const defaults = {
  limit: 250,
};

const getAssetHistoryObject = (response, symbol, ema = true) => {
  const data = response[symbol].map(parseAssetData);
  if (ema) {
    return calculateEma(data);
  }
  return data;
};

const getAssetHistory = async (
  symbol,
  interval = '15Min',
  options = { ...defaults },
) => {
  const response = await alpaca.getBars(interval, symbol, options);
  if (!Array.isArray(symbol)) {
    return getAssetHistoryObject(response, symbol);
  }
  const output = {};
  symbol.forEach((string) => {
    output[string] = getAssetHistoryObject(response, string, false);
  });
  return output;
};

module.exports = getAssetHistory;
