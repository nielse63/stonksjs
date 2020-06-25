const env = require('../lib/env');
const Account = require('../lib/Account');

module.exports = (app) => {
  app.get('/api/account', async (req, res) => {
    try {
      const account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
      const user = await account.authenticate();
      const balances = await account.getBalances();
      const buyingPower = await account.getBuyingPower();
      res.json({
        data: {
          user,
          balances,
          buyingPower,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });
};
