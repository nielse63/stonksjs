module.exports = (app) => {
  app.get('/api/assets', (req, res) => {
    res.json({
      data: {},
    });
  });

  app.get('/api/assets/:symbol', (req, res) => {
    res.json({
      data: {},
    });
  });

  app.get('/api/assets/:symbol/backtest', (req, res) => {
    res.json({
      data: {},
    });
  });
};
