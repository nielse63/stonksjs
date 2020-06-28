#!/usr/bin/env node
const env = require('../api/lib/env');
const debug = require('debug')('stonks:buying-power');
const Account = require('../api/lib/Account');

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

const main = async () => {
  debug('getting buying power');
  const buyingPower = await getBuyingPower();
  return buyingPower;
};

if (!module.parent) {
  (async () => {
    await main();
  })();
}

module.exports = main;
