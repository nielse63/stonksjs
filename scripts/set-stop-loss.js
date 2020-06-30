#!/usr/bin/env node
require('../config/env');
const Portfolio = require('../lib/Portfolio');
const Market = require('../lib/Market');
const { Robinhood } = require('algotrader');

const portfolio = new Portfolio();

const stopLossFilter = (order) => {
  const {
    trigger,
    type,
    side,
    state,
  } = order;
  return state === 'queued'
    && trigger === 'stop'
    && type === 'market'
    && side === 'sell';
};

const cancelOpenOrders = async (account) => {
  console.log('canceling open stop-loss orders');
  try {
    const orders = await account.getOrders();
    const allStopOrders = orders.filter(stopLossFilter);
    if (!allStopOrders.length) return [];
    const orderObjectPromises = allStopOrders
      .map(({ id }) => Robinhood.Order.getByOrderID(account.user, id));
    const orderObjects = await Promise.all(orderObjectPromises);
    const cancelPromises = orderObjects.map((order) => order.cancel());
    const response = await Promise.all(cancelPromises);
    return response;
  } catch (error) {
    console.error(error);
  }
  return [];
};

const createStopLossOrder = async (object) => {
  const {
    symbol,
    quantity,
    buyPrice,
    lastPrice,
  } = object;
  console.log(`creating stop loss order for ${symbol}`);
  const highestPrice = Math.max(buyPrice, lastPrice);
  const stopPrice = parseFloat((highestPrice * 0.95).toFixed(2));
  const options = {
    quantity: Math.floor(quantity),
    trigger: 'stop',
    stopPrice,
    timeInForce: 'gtc',
  };
  const sellOrder = await portfolio.sell(symbol, options);
  return sellOrder;
};

const createOrders = async (account) => {
  const assets = await account.getPortfolio();
  const sellableStocks = assets.filter(({ quantity }) => quantity >= 1);
  const promises = sellableStocks.map((object) => createStopLossOrder(object));
  const sellOrders = await Promise.all(promises);
  return sellOrders;
};

const setStopLoss = async () => {
  console.log('running set stop loss script');
  const market = new Market();
  const isMarketOpen = await market.isOpen();
  if (!isMarketOpen) {
    console.log('market is not open yet. exiting');
    return [];
  }
  const { account } = portfolio;
  await cancelOpenOrders(account);
  const sellOrders = await createOrders(account);
  return sellOrders;
};

if (!module.parent) {
  (async () => {
    await setStopLoss();
  })();
}

module.exports = setStopLoss;
