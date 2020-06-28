#!/usr/bin/env node
const env = require('../api/lib/env');
const fs = require('fs-extra');
const path = require('path');
const debug = require('debug')('stonks:sell');
const Portfolio = require('../api/lib/Portfolio');
const Account = require('../api/lib/Account');
const Backtest = require('../api/lib/Backtest');

const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

let cacheRHPortfolio;

const account = new Account(
  env.ROBINHOOD_USERNAME,
  env.ROBINHOOD_PASSWORD,
  env.ROBINHOOD_DEVICE_TOKEN,
);

const stonksPortfolio = new Portfolio(
  env.ROBINHOOD_USERNAME,
  env.ROBINHOOD_PASSWORD,
  env.ROBINHOOD_DEVICE_TOKEN,
);

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

const getRoi = (object) => {
  const { buyPrice, lastPrice } = object;
  return ((lastPrice - buyPrice) / buyPrice) * 100;
};

const shouldExecuteStop = (object) => {
  const roi = getRoi(object);
  return roi < -10;
};

const runBacktest = async (array) => {
  const output = [];
  const assetsInPlay = array.filter(({ shouldSell }) => !shouldSell);
  for (const object of assetsInPlay) {
    const { symbol } = object;
    debug(`backtesting ${symbol}`);
    const backtest = new Backtest(symbol, creds);
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

const getAssetsToStopSell = (assets) => assets.map((object) => {
  const shouldSell = shouldExecuteStop(object);
  const roi = getRoi(object);
  return {
    ...object,
    roi: `${roi.toFixed(2)}%`,
    shouldSell,
  };
}).filter(({ shouldSell }) => shouldSell);

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
    type: 'limit',
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
  debug('running sell');
  const assets = await account.getPortfolio();
  const assetsToStopSell = getAssetsToStopSell(assets);
  const stocks = getStocks(assets);
  const backtestedAssets = await runBacktest(stocks);
  const assetsToSell = backtestedAssets.filter(({ shouldSell }) => shouldSell);
  const allSellableAssets = [
    ...assetsToStopSell,
    ...assetsToSell,
  ];

  const sellCount = allSellableAssets.length;
  if (!sellCount) {
    debug('no assets meet sell criteria');
    return [];
  }

  debug(`selling ${sellCount} assets`);

  const output = await sellAssets(allSellableAssets);
  fs.writeJsonSync(path.resolve(__dirname, 'data/sell-orders.json'), output);
  return output;
};

if (!module.parent) {
  (async () => {
    await rebalancePortfolio();
  })();
}

module.exports = rebalancePortfolio;
