require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.ALPACA_PAPER_TRADING === undefined) {
  process.env.ALPACA_PAPER_TRADING = true;
}
if (process.env.ALPACA_PAPER_TRADING === 'false') {
  process.env.ALPACA_PAPER_TRADING = false;
}

const requiredKeys = [
  'ROBINHOOD_USERNAME',
  'ROBINHOOD_PASSWORD',
  'ROBINHOOD_DEVICE_TOKEN',
];
requiredKeys.forEach((key) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is a required environment key`);
  }
});

module.exports = process.env;
