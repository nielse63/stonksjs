const _ = require('lodash');
const env = require('../lib/env');
const Asset = require('../lib/Asset');

module.exports = (app) => {
  app.get('/api/assets/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const options = req.query;
    const creds = {
      keyId: env.ALPACA_API_KEY,
      secretKey: env.ALPACA_API_SECRET,
      paper: env.ALPACA_PAPER_TRADING,
    };
    const asset = new Asset(symbol, creds, options);
    await asset.calcSMA(5);
    await asset.calcSMA(12);
    // const history = await asset.getHistory();
    const lastPrice = await asset.getLastPrice();
    const cleanAsset = _.omit(asset, ['alpaca', 'options']);
    res.json({
      data: {
        ...cleanAsset,
        lastPrice,
        history: asset.history.slice(0, 25),
      },
    });
  });

  app.get('/api/assets/:symbol/backtest', async (req, res) => {
    res.json({
      data: {},
    });
  });
};
