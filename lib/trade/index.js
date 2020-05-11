const _ = require('lodash');
const getAssetHistory = require('../assets/getAssetHistory');
const getPosition = require('../positions/getPosition');
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
    const qty = Math.floor(cash / price) - 0.01;
    const order = await trade('buy', symbol, qty, price);
    logger.info(`Bought ${qty} shares ${symbol} at ${price}`);
    return order;
  }
  if (canSellAsset) {
    const position = await getPosition(symbol);
    logger.info(`Creating sell order for ${symbol}`);
    const qty = Math.abs(position.qty);
    const price = lastHistory.close - 0.01;
    const order = await trade('sell', symbol, qty, price);
    logger.info(`Sold ${qty} shares ${symbol} at ${price}`);
    return order;
  }
  return null;
};
