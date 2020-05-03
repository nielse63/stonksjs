const _ = require('lodash');
const getAssetHistory = require('../assets/getAssetHistory');
const logger = require('../helpers/logger');
const canBuy = require('./canBuy');
const canSell = require('./canSell');
const trade = require('./trade');

module.exports = async (symbol, cash) => {
  const history = await getAssetHistory(symbol);
  const canBuyAsset = await canBuy(symbol, history);
  const canSellAsset = await canSell(symbol, history);
  const lastHistory = _.last(history);
  if (canBuyAsset) {
    logger.info(`Creating buy order for ${symbol}`);
    const price = lastHistory.close;
    const qty = Math.floor(cash / price);
    const order = await trade('buy', symbol, qty, price);
    logger.info(`Bought ${qty} shares ${symbol} at ${price}`);
    return order;
  }
  if (canSellAsset) {
    logger.info(`Creating sell order for ${symbol}`);
    const qty = 1;
    const price = lastHistory.close;
    const order = await trade('sell', symbol, qty, price);
    logger.info(`Sold ${qty} shares ${symbol} at ${price}`);
    return order;
  }
  return null;
};
