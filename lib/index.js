require('../config/env');
const logger = require('./helpers/logger');
const validateOptions = require('./helpers/validateOptions');
const tradableAssets = require('./trade/assets');
const trade = require('./trade');
const getAccount = require('./account/getAccount');
const cancelAllOrders = require('./orders/cancelAllOrders');

module.exports = async () => {
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
};
