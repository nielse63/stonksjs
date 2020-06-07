require('dotenv').config();
const debug = require('debug')('stonks:env');

// process.on('beforeExit', (code) => {
//   console.log('Process beforeExit event with code: ', code);
// });

// process.on('exit', (code) => {
//   console.log('Process exit event with code: ', code);
// });

// process.on('uncaughtException', (err, origin) => {
//   console.log('uncaughtException', { err, origin });
// });

process.on('uncaughtExceptionMonitor', (err, origin) => {
  debug('uncaughtExceptionMonitor', { err, origin });
});

// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
//   // Application specific logging, throwing an error, or other logic here
// });

function handle(signal) {
  debug(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);

if (process.env.ALPACA_PAPER_TRADING === undefined) {
  process.env.ALPACA_PAPER_TRADING = true;
}
if (process.env.ALPACA_PAPER_TRADING === 'false') {
  process.env.ALPACA_PAPER_TRADING = false;
}

const requiredKeys = [
  'ALPACA_API_KEY',
  'ALPACA_API_SECRET',
  'ALPACA_PAPER_TRADING',
  'ROBINHOOD_USERNAME',
  'ROBINHOOD_PASSWORD',
  'ROBINHOOD_DEVICE_TOKEN',
];
requiredKeys.forEach((key) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is a required environment key`);
  }
});

console.log(process.env);

module.exports = process.env;
