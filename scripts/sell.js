#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const debug = require('debug')('stonks:sell');
const Portfolio = require('../lib/Portfolio');
const Account = require('../lib/Account');
const Backtest = require('../lib/Backtest');
const Market = require('../lib/Market');

let cacheRHPortfolio;

const account = new Account();

const stonksPortfolio = new Portfolio();

const shouldSellAsset = (object) => {
  if (!object) return false;
  const {
    analysis: { profitPct },
    lastIndicator,
  } = object;
  if (profitPct < 0) {
    return true;
  }
  const lastIndicatorKeys = Object.keys(lastIndicator);
  const firstKey = lastIndicatorKeys[0];
  const secondKey = lastIndicatorKeys[1];
  // const lastKey = lastIndicatorKeys[2];
  return lastIndicator[firstKey] < lastIndicator[secondKey];
};

const runBacktest = async (array) => {
  const output = [];
  const assetsInPlay = array.filter(({ shouldSell }) => !shouldSell);
  for (const object of assetsInPlay) {
    const { symbol } = object;
    debug(`backtesting ${symbol}`);
    const backtest = new Backtest(symbol);
    try {
      const results = await backtest.sma(5, 12, 25);
      if (!results) {
        output.push(object);
      } else {
        const failedBacktest = shouldSellAsset(results);
        output.push({
          ...object,
          profitPct: results.analysis.profitPct,
          shouldSell: failedBacktest,
          lastIndicator: results.lastIndicator,
        });
      }
    } catch (error) {}
  }
  return output;
};

const getStocks = (assets) => assets.filter(({ type }) => type === 'stock');

const getPortfolio = async () => {
  cacheRHPortfolio = cacheRHPortfolio || await account.user.getPortfolio();
  return cacheRHPortfolio;
};

const sellAsset = async (asset) => {
  const portfolio = await getPortfolio();
  const { symbol, lastPrice } = asset;
  const quantity = await portfolio.getQuantity(symbol);
  const options = {
    quantity: Math.floor(quantity),
    timeInForce: 'gtc',
    stopPrice: lastPrice,
    trigger: 'stop',
  };
  debug(`placing sell order for ${symbol}`);
  const order = await stonksPortfolio.sell(symbol, options);
  return order;
};

const sellAssets = async (assets) => {
  const output = [];
  for (const object of assets) {
    const order = await sellAsset(object);
    output.push(order);
  }
  return output;
};

const rebalancePortfolio = async () => {
  const market = new Market();
  const isMarketOpen = await market.isOpen();
  if (!isMarketOpen) {
    debug('market is not open yet. exiting');
    return [];
  }
  debug('running sell');
  const assets = await account.getPortfolio();
  const stocks = getStocks(assets);
  const backtestedAssets = await runBacktest(stocks);
  const assetsToSell = backtestedAssets.filter(({ shouldSell }) => shouldSell);

  const sellCount = assetsToSell.length;
  if (!sellCount) {
    debug('no assets meet sell criteria');
    return [];
  }

  debug(`selling ${sellCount} assets`);

  const output = await sellAssets(assetsToSell);
  fs.writeJsonSync(path.resolve(__dirname, 'data/sell-orders.json'), output);
  return output;
};

if (!module.parent) {
  (async () => {
    await rebalancePortfolio();
  })();
}

module.exports = rebalancePortfolio;
