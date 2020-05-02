const strategies = require('../strategies');
const createSession = require('./createSession');
const createBuyObject = require('./createBuyObject');
const createSellObject = require('./createSellObject');
const sessionObserver = require('./sessionObserver');

const backtest = ({
  symbol,
  capital,
  strategy = { ...strategies.ema },
}) => new Promise((resolve) => {
  const session = createSession(symbol, capital, strategy.indicators);

  // subscribe to changes
  sessionObserver(session, resolve);

  // run backtest
  session.backtest((price, account, indicators) => {
    const curPrice = price.close;

    // buy
    if (!account.positions.length && strategy.buySignal(indicators)) {
      session.buy(createBuyObject(account, curPrice));
    }

    // sell
    if (account.positions.length === 1 && strategy.sellSignal(indicators)) {
      session.sell(createSellObject(account, curPrice));
    }
  });
});

module.exports = backtest;
