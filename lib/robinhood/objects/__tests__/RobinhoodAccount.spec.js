const algotrader = require('algotrader');
const RobinhoodAccount = require('../RobinhoodAccount');
// const RobinhoodPortfolio = require('../RobinhoodPortfolio');

describe('RobinhoodAccount', () => {
  let account;
  beforeEach(() => {
    account = new RobinhoodAccount(
      process.env.ROBINHOOD_USERNAME,
      process.env.ROBINHOOD_PASSWORD,
      process.env.ROBINHOOD_DEVICE_TOKEN
    );
  });

  describe('constructor', () => {
    it('should throw error on undefined username', () => {
      expect(() => new RobinhoodAccount(null, null, null)).toThrow('`username` is not defined');
    });

    it('should throw error on undefined password', () => {
      expect(() => new RobinhoodAccount(process.env.ROBINHOOD_USERNAME, null, null)).toThrow(
        '`password` is not defined'
      );
    });

    it('should throw error on undefined deviceToken', () => {
      expect(
        () =>
          new RobinhoodAccount(process.env.ROBINHOOD_USERNAME, process.env.ROBINHOOD_PASSWORD, null)
      ).toThrow('`deviceToken` is not defined');
    });

    it('should not throw error when args are defined', () => {
      expect(
        () =>
          new RobinhoodAccount(
            process.env.ROBINHOOD_USERNAME,
            process.env.ROBINHOOD_PASSWORD,
            process.env.ROBINHOOD_DEVICE_TOKEN
          )
      ).not.toThrow();
    });

    it('should use env vars by default', () => {
      expect(() => new RobinhoodAccount()).not.toThrow();
    });
  });

  describe('authenticate', () => {
    it('should not be authenticated by default', async () => {
      const { isAuthenticated } = account;
      expect(isAuthenticated).toBe(false);
    });

    it('should authenticate the user', async () => {
      await account.authenticate();
      const { isAuthenticated } = account;
      expect(isAuthenticated).toBe(true);
    });

    it('should return the user object', async () => {
      const output = await account.authenticate();
      expect(output).toBeInstanceOf(algotrader.Robinhood.User);
    });
  });

  // describe('getBalances', () => {
  //   it('should resolve getting balances', async () => {
  //     await expect(account.getBalances()).toResolve();
  //   });

  //   it('should return expected object', async () => {
  //     const balances = await account.getBalances();
  //     expect(balances).toBeObject();
  //     expect(balances).toContainKeys([
  //       'unsettledFunds',
  //       'unsettledDebit',
  //       'unclearedDeposits',
  //       'smaHeldForOrders',
  //       'cash',
  //       'cashHeldForOrders',
  //       'cashAvailableForWithdraw',
  //       'buyingPower',
  //       'sma',
  //       'accountType',
  //       'margin',
  //     ]);
  //   });
  // });

  // describe('getPortfolio', () => {
  //   it('should return expected object', async () => {
  //     await expect(account.getPortfolio()).toResolve();
  //     const portfolio = await account.getPortfolio();
  //     console.log(portfolio)
  //     expect(portfolio).toBeInstanceOf(RobinhoodPortfolio);
  //     expect(portfolio.positions).toBeArray()
  //   });
  // });

  // describe('getOrders', () => {
  //   it('should return array', async () => {
  //     await expect(account.getOrders()).toResolve();
  //     const orders = await account.getOrders();
  //     console.log(orders)
  //     // expect(portfolio).toBeInstanceOf(RobinhoodPortfolio);
  //     expect(portfolio.positions).toBeArray()
  //   });
  // });
});
