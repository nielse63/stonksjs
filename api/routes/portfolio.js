const env = require('../lib/env');
const Account = require('../lib/Account');

module.exports = (app) => {
  app.get('/api/portfolio', async (req, res) => {
    try {
      const account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
      await account.authenticate();
      const portfolio = await account.getPortfolio();
      // console.log({ portfolio });
      res.json({
        data: portfolio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });
};
