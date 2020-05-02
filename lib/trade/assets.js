const getAccount = require('../account/getAccount');
const getAssetHistory = require('../assets/getAssetHistory');
const getPositionSymbols = require('../positions/getPositionSymbols');
const { stocksToWatch } = require('../helpers/constants');

module.exports = async () => {
  const { cash } = await getAccount();
  const positions = await getPositionSymbols();
  const symbols = [...new Set([
    ...positions,
    ...stocksToWatch,
  ])];
  const assets = await getAssetHistory(symbols, 'minute', { limit: 1 });
  const data = Object.entries(assets)
    .filter(([, [{ close }]]) => close < cash / 2)
    .reduce((output, [key, [object]]) => ({
      ...output,
      [key]: object,
    }), {});
  return Object.keys(data);
};
