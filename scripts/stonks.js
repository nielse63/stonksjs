#!/usr/bin/env node
require('../config/env');
const path = require('path');
const fs = require('fs-extra');
const schedule = require('node-schedule');
const StonksLogger = require('../lib/StonksLogger');
const screener = require('./screener');
const buy = require('./buy');
const sell = require('./sell');
const Market = require('../lib/Market');
// const setStopLoss = require('./set-stop-loss');

const market = new Market();
const logger = new StonksLogger();

(async () => {
  // create the data dir
  const datadir = path.resolve(__dirname, 'data');
  fs.ensureDirSync(datadir);

  const scheduler = async (interval, fn, title) => {
    if (await market.isOpen()) {
      logger.log(`running ${title} immediately`);
      await fn();
    }
    const job = schedule.scheduleJob(`${interval} * * * 1-5`, async () => {
      await fn();
    });
    const next = job.nextInvocation();
    logger.log(`next ${title} job is scheduled for: ${next}`);
    return Promise.resolve();
  };

  await scheduler('*/60', screener, 'screener');
  await scheduler('*/30', sell, 'sell');
  await scheduler('0,30', buy, 'buy');
})();
