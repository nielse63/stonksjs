const _ = require('lodash');
const env = require('./env');
const Portfolio = require('./Portfolio');
const Account = require('./Account');
const Backtest = require('./Backtest');

const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

const shouldSellAsset = (object) => {
  const {
    analysis: { profitPct },
    lastIndicator,
  } = object;
  if (profitPct < 0) {
    return true;
  }
  const lastIndicatorKeys = Object.keys(lastIndicator);
  const firstKey = _.first(lastIndicatorKeys);
  const lastKey = _.last(lastIndicatorKeys);
  return lastIndicator[firstKey] < lastIndicator[lastKey];
};

const rebalancePortfolio = async () => {
  const account = new Account(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );
  const assets = await account.getPortfolio();
  const promises = assets.map(({ symbol }) => {
    const backtest = new Backtest(symbol, creds);
    return backtest.sma(12, 50);
  });
  const results = await Promise.all(promises);
  const assetsToSell = results
    .filter(shouldSellAsset)
    .map((object) => {
      const {
        meta: { symbol },
        analysis,
        lastIndicator,
      } = object;
      return {
        symbol,
        analysis,
        lastIndicator,
      };
    });

  if (!assetsToSell.length) return;

  const portfolio = await account.user.getPortfolio();
  const stonksPortfolio = new Portfolio(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );

  await account.user.cancelOpenOrders();

  for (const object of assetsToSell) {
    const { symbol } = object;
    const quantity = await portfolio.getQuantity(symbol);
    const order = await stonksPortfolio.sell(symbol, { quantity });
    console.log({ symbol, quantity, order });
  }
};

module.exports = rebalancePortfolio;
