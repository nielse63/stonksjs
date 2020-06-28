const sma = () => ({
  entryRule: (enterPosition, { bar }) => {
    if (bar.period1 >= bar.period2) {
      enterPosition();
    }
  },
  exitRule: (exitPosition, { bar }) => {
    if (bar.period1 < bar.period2) {
      exitPosition();
    }
  },
  stopLoss: ({ entryPrice }) => entryPrice * 0.95,
});

module.exports = sma;
