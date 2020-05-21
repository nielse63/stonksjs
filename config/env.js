require('dotenv').config();

if (process.env.ALPACA_PAPER_TRADING === undefined) {
  process.env.ALPACA_PAPER_TRADING = true;
}


if (process.env.ALPACA_PAPER_TRADING === 'false') {
  process.env.ALPACA_PAPER_TRADING = false;
}
