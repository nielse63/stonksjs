#!/usr/bin/env node
require('../config/env');
const path = require('path');
const debug = require('debug')('stonks:cli');
const fs = require('fs-extra');
const {
  Algorithm: { Scheduler },
} = require('algotrader');
const schedule = require('node-schedule');
const screener = require('./screener');
const buy = require('./buy');
const sell = require('./sell');
const setStopLoss = require('./set-stop-loss');

const datadir = path.resolve(__dirname, 'data');
fs.ensureDirSync(datadir);

{
  // schedule cron for stop loss script
  const scheduler = new Scheduler(setStopLoss);
  scheduler.every(15);
  const next = scheduler.getNext();
  debug(`next stop loss job is scheduled for: ${next}`);
}

{
  // schedule running stock screener
  const job = schedule.scheduleJob('*/60 * * * 1-5', async () => {
    await screener();
  });
  const next = job.nextInvocation();
  debug(`next screener job is scheduled for: ${next}`);
}

{
  // run sell script
  const scheduler = new Scheduler(sell);
  scheduler.every(30);
  const next = scheduler.getNext();
  debug(`next sell job is scheduled for: ${next}`);
}

{
  // run sell script
  const scheduler = new Scheduler(buy);
  scheduler.every(60);
  const next = scheduler.getNext();
  debug(`next buy job is scheduled for: ${next}`);
}
