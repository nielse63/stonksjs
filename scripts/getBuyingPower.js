#!/usr/bin/env node
const env = require('../config/env');
const Account = require('../lib/Account');
const StonksLogger = require('../lib/StonksLogger');

const logger = new StonksLogger('buying-power');

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
  logger.log('getting buying power');
  const buyingPower = await getBuyingPower();
  return buyingPower;
};

if (!module.parent) {
  (async () => {
    await main();
  })();
}

module.exports = main;
