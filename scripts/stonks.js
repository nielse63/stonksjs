#!/usr/bin/env node
require('../config/env');
const path = require('path');
const debug = require('debug')('stonks:cli');
const fs = require('fs-extra');
const screener = require('./screener');
const backtest = require('./backtest');
const buy = require('./buy');
const sell = require('./sell');
const getBuyingPower = require('./getBuyingPower');

(async () => {
  const datadir = path.resolve(__dirname, 'data');
  fs.ensureDirSync(datadir);
  // first sell anything that needs to be sold
  await sell();
  const buyingPower = await getBuyingPower();
  if (!buyingPower) {
    debug('not enough buying power to continue');
    return;
  }

  // refresh our screened assets
  await screener();
  await backtest();
  await buy();
})();
