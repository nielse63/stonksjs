const debug = require('debug')('stonks');
const tradableAssets = require('./lib/trade/assets');
const trade = require('./lib/trade');
const getAccount = require('./lib/account/getAccount');
const cancelAllOrders = require('./lib/orders/cancelAllOrders');

(async () => {
  await cancelAllOrders();
  const { buyingPower } = await getAccount();
  const symbols = await tradableAssets(buyingPower);
  const cashPerAsset = buyingPower / symbols.length;
  symbols.forEach(async (symbol) => {
    const output = await trade(symbol, cashPerAsset);
    if (output) {
      debug(`Trade results for ${symbol}:`);
      debug(output);
    }
  });
})();
