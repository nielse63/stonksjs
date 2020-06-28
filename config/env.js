require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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
  'MAILTRAP_EMAIL',
  'MAILTRAP_USER',
  'MAILTRAP_PASSWORD',
];
requiredKeys.forEach((key) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is a required environment key`);
  }
});

module.exports = process.env;
