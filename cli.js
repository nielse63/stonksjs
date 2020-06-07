#!/usr/bin/env node
const ema = require('./lib/ema');
const sma = require('./lib/sma');

const args = process.argv.slice(2);
const stategy = args
  .find((arg) => arg.startsWith('--strategy='))
  .replace('--strategy=', '');
console.log({ args, stategy });

(async () => {
  switch (stategy) {
    case 'sma':
      await sma();
      break;
    case 'ema':
      await ema();
      break;
    default:
      console.warn('no strategy provided. use --strategy=[ema|sma|macd]');
      break;
  }
})();
