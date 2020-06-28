#!/usr/bin/env node
require('../config/env');
const path = require('path');
const debug = require('debug')('stonks:cli');
const fs = require('fs-extra');
const algotrader = require('algotrader');
const screener = require('./screener');
const backtest = require('./backtest');
const buy = require('./buy');
const sell = require('./sell');
const getBuyingPower = require('./getBuyingPower');

const { Scheduler } = algotrader.Algorithm;

const rebalance = async () => {
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
};

const scheduler = new Scheduler(rebalance);
scheduler.every(60 * 24);
