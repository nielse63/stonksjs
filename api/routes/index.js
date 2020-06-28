const accountRoute = require('./account');
const assetsRoute = require('./assets');
const emailRoute = require('./email');
const portfolioRoute = require('./portfolio');
const reportsRoute = require('./reports');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.json({
      data: {
        routes: [
          '/api/account',
          '/api/portfolio',
          '/api/assets/:symbol',
          '/api/assets/:symbol/backtest',
          '/api/email',
          '/api/reports',
        ],
      },
    });
  });

  accountRoute(app);
  assetsRoute(app);
  emailRoute(app);
  portfolioRoute(app);
  reportsRoute(app);
};
