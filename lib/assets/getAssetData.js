const alpaca = require('../alpaca');
const formatAssetData = require('./formatAssetData');
const calculateEma = require('./calculateEma');

const defaults = {
  limit: 250,
};

const getAssetData = async (
  symbol,
  interval = '15Min',
  options = { ...defaults },
) => {
  const rawData = await alpaca.getBars(interval, symbol, options);
  const data = formatAssetData(rawData[symbol]);
  return calculateEma(data);
};

module.exports = getAssetData;
