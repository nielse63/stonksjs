#!/usr/bin/env node
require('dotenv').config();
const cp = require('child_process');
const path = require('path');
const debug = require('debug')('stonks:cli');
const fs = require('fs-extra');
const screener = require('./screener');
const backtest = require('./backtest');
const buy = require('./buy');
const sell = require('./sell');
const getBuyingPower = require('./getBuyingPower');

const runScreenerScrtipt = () => {
  debug('running screener.py');
  const filepath = path.resolve(__dirname, 'screener.py');
  cp.execSync(filepath);
};

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
  runScreenerScrtipt();
  await screener();
  await backtest();
  await buy();
})();
