// const _ = require('lodash');
const env = require('../lib/env');
const Asset = require('../lib/Asset');
const Backtest = require('../lib/Backtest');

const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

module.exports = (app) => {
  app.get('/api/assets/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const options = req.query;
    const asset = new Asset(symbol, creds, options);
    // const lastPrice = await asset.getLastPrice();
    // const cleanAsset = _.omit(asset, ['alpaca', 'options']);
    const data = await asset.toJSON();
    res.json({ data });
  });

  app.get('/api/assets/:symbol/backtest', async (req, res) => {
    const { symbol } = req.params;
    const options = req.query;
    const backtest = new Backtest(symbol, creds, options);
    const results = await backtest.sma(12, 50);
    // console.log(backtest);

    res.json({
      data: results,
    });
  });
};
