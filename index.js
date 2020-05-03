require('dotenv').config();
const logger = require('./lib/helpers/logger');
const validateOptions = require('./lib/helpers/validateOptions');
const tradableAssets = require('./lib/trade/assets');
const trade = require('./lib/trade');
const getAccount = require('./lib/account/getAccount');
const cancelAllOrders = require('./lib/orders/cancelAllOrders');


(async () => {
  logger.info(`Starting stonks at ${(new Date()).toISOString()}`);
  validateOptions(process.env, ['ALPACA_API_KEY', 'ALPACA_API_SECRET']);
  try {
    await cancelAllOrders();
    const { buyingPower } = await getAccount();
    const symbols = await tradableAssets(buyingPower);
    const cashPerAsset = buyingPower / symbols.length;
    const trades = symbols.map((symbol) => trade(symbol, cashPerAsset));
    await Promise.all(trades);
  } catch (error) {
    logger.error(error);
  }
  logger.info(`Finished stonks at ${(new Date()).toISOString()}`);
})();
