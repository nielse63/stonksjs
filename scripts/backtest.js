const SMACrossOver = require('../lib/backtesting/SMACrossOver');


(async () => {
  const sma = new SMACrossOver({ symbol: 'AAPL' });
  const results = await sma.backtest();
  console.log(results);
})();
