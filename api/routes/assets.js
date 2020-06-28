const Asset = require('../../lib/Asset');
const Backtest = require('../../lib/Backtest');

module.exports = (app) => {
  app.get('/api/assets/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const options = req.query;
    const asset = new Asset(symbol, options);
    const data = await asset.toJSON();
    res.json({ data });
  });

  app.get('/api/assets/:symbol/backtest', async (req, res) => {
    const { symbol } = req.params;
    const options = req.query;
    const backtest = new Backtest(symbol, options);
    const results = await backtest.sma();

    res.json({
      data: results,
    });
  });
};
