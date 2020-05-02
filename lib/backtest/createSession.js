const { Session } = require('pivotrade');
const subYears = require('date-fns/subYears');
const formatISO = require('date-fns/formatISO');
const { today } = require('./constants');

const createSession = (symbol, capital, indicators) => {
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

module.exports = createSession;
