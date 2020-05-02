const alpaca = require('../alpaca');
const parseAssetData = require('./parseAssetData');
const calculateEma = require('./calculateEma');

const defaults = {
  limit: 250,
};

const getAssetHistory = async (
  symbol,
  interval = '15Min',
  options = { ...defaults },
) => {
  const rawData = await alpaca.getBars(interval, symbol, options);
  const data = rawData[symbol].map(parseAssetData);
  return calculateEma(data);
};

module.exports = getAssetHistory;
