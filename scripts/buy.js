#!/usr/bin/env node
const env = require('../config/env');
const debug = require('debug')('stonks:buy');
const path = require('path');
const fs = require('fs-extra');
const Portfolio = require('../lib/Portfolio');
const Account = require('../lib/Account');

let cachedAccount = null;
const getAccount = () => {
  cachedAccount = cachedAccount || new Account(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );
  return cachedAccount;
};

const getBuyingPower = async () => {
  const account = getAccount();
  const buyingPower = await account.getBuyingPower();
  return buyingPower;
};

const buySingleAssets = async ({ asset, amountAvailablePerAsset, portfolio }) => {
  const { symbol, price } = asset;
  const quantity = parseFloat((amountAvailablePerAsset / price).toFixed(2));
  debug(`buying ${quantity} shares of ${symbol} @ ${price}`);
  const order = await portfolio.buy(symbol, {
    quantity,
    trigger: 'stop',
  });
  return order;
};

const buyAssets = async (array, buyingPower) => {
  const portfolio = new Portfolio(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );
  const assetsLength = array.length;
  console.log(`attempting to purchase ${assetsLength} assets`);

  if (!assetsLength) {
    console.log('no assets recommended to buy');
  }

  const amountAvailablePerAsset = buyingPower / assetsLength;
  const output = [];
  for (const asset of array) {
    const order = buySingleAssets({ asset, amountAvailablePerAsset, portfolio });
    output.push(order);
  }
  return output;
};

const readRecommendations = () => {
  const recsfilepath = path.resolve(__dirname, 'data/recommendations.json');
  const recommendations = fs.readJSONSync(recsfilepath, 'utf8');
  return recommendations;
};

const main = async () => {
  debug('buying recommended assets');
  const buyingPower = await getBuyingPower();
  if (buyingPower < 1) {
    debug('no buying power available - exiting');
    return [];
  }
  const recommendations = readRecommendations();
  const output = await buyAssets(recommendations, buyingPower);
  fs.writeJsonSync(path.resolve(__dirname, 'data/buy-orders.json'), output);
  return output;
};

if (!module.parent) {
  (async () => {
    await main();
  })();
}

module.exports = main;
