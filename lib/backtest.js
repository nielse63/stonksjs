require('dotenv').config();
const { Session } = require('pivotrade');
const subYears = require('date-fns/subYears');
const formatISO = require('date-fns/formatISO');
const isAfter = require('date-fns/isAfter');
const isToday = require('date-fns/isToday');
const addDays = require('date-fns/addDays');
const strategies = require('./strategies');

const today = new Date();

const createSession = (symbol, capital, indicators = {}) => {
  const endDate = formatISO(today);
  const startDate = formatISO(subYears(today, 1));
  return new Session({
    name: `${symbol} Backtest`,
    symbol,
    capital,
    start_date: startDate,
    end_date: endDate,
    indicators,
  });
};

const backtest = ({
  symbol,
  capital,
  strategy = { ...strategies.ema },
}) => new Promise((resolve) => {
  const session = createSession(symbol, capital, strategy.indicators);

  // subscribe to changes
  const { store } = session;
  const datesChecked = [];
  store.subscribe(() => {
    const state = store.getState();
    const { price: { date } } = state;
    if (datesChecked.includes(date.toString())) {
      return;
    }
    datesChecked.push(date.toString());

    // check if backtesting is complete
    if (isToday(date) || isAfter(addDays(date, 2), today)) {
      resolve(state);
    }
  });

  // run backtest
  session.backtest((price, account, indicators) => {
    // const { EMA5, EMA12 } = indicators;
    const curPrice = price.close;

    // buy
    if (!account.positions.length && strategy.buySignal(indicators)) {
      const numShares = Math.floor(account.capital / curPrice);
      const stopLoss = 0.90 * curPrice;
      session.buy({
        limit: curPrice,
        quantity: numShares,
        stop_loss: stopLoss,
      });
    }

    // sell
    if (account.positions.length === 1 && strategy.sellSignal(indicators)) {
      const position = account.positions[0];
      session.sell({
        id: position.id,
        limit: curPrice,
        quantity: position.quantity,
      });
    }
  });
});

module.exports = backtest;
