const path = require('path');
const algotrader = require('algotrader');
const env = require('../env');
const Account = require('../Account');
const mock = require('../__mocks__/user.mock');

const { Robinhood: { User } } = algotrader;

const userFile = path.resolve(__dirname, '../../../data/user.json');

describe('Account', () => {
  it('should be defined', () => {
    expect(Account).toBeDefined();
  });

  describe('static props', () => {
    it('should have `userFile` defined', () => {
      expect(Account.userFile).toBeDefined();
      expect(Account.userFile).toEqual(userFile);
    });

    it('should have `accountProperties` defined', () => {
      expect(Account.accountProperties).toEqual([
        'portfolio_cash',
        'account_number',
        'type',
        'created_at',
        'updated_at',
        'deactivated',
        'buying_power',
        'cash_available_for_withdrawal',
        'cash',
        'cash_held_for_orders',
        'uncleared_deposits',
        'crypto_buying_power',
        'rhs_account_number',
        'state',
        'locked',
        'user_id',
      ]);
    });

    it('should have `balanceProperties` defined', () => {
      expect(Account.balanceProperties).toEqual([
        'unsettledFunds',
        'unsettledDebit',
        'unclearedDeposits',
        'cash',
        'cashHeldForOrders',
        'buyingPower',
        'accountType',
      ]);
    });
  });

  describe('constructor', () => {
    it('should throw error on undefined username', () => {
      expect(() => new Account()).toThrow('`username` is not defined');
    });

    it('should throw error on undefined password', () => {
      expect(() => new Account(
        env.ROBINHOOD_USERNAME,
      )).toThrow('`password` is not defined');
    });

    it('should throw error on undefined deviceToken', () => {
      expect(() => new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
      )).toThrow('`deviceToken` is not defined');
    });

    it('should not throw error when args are defined', () => {
      expect(() => new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      )).not.toThrow();
    });

    it('should define a `user` prop', () => {
      const account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
      expect(account.user).toBeDefined();
      expect(account.user).toBeInstanceOf(User);
    });

    it('should define a `balances` prop', () => {
      const account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
      expect(account.balances).toEqual({
        unsettledFunds: null,
        unsettledDebit: null,
        unclearedDeposits: null,
        cash: null,
        cashHeldForOrders: null,
        buyingPower: null,
        accountType: null,
      });
    });

    it('should define an `account` prop', () => {
      const account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
      expect(account.account).toEqual({
        portfolioCash: null,
        accountNumber: null,
        type: null,
        createdAt: null,
        updatedAt: null,
        deactivated: null,
        buyingPower: null,
        cashAvailableForWithdrawal: null,
        cash: null,
        cashHeldForOrders: null,
        unclearedDeposits: null,
        cryptoBuyingPower: null,
        rhsAccountNumber: null,
        state: null,
        locked: null,
        userId: null,
      });
    });
  });

  describe('authenticate', () => {
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should not be authenticated by default', async () => {
      const isAuthenticated = account.user.isAuthenticated();
      expect(isAuthenticated).toBe(false);
    });

    it('should authenticate the user', async () => {
      await account.authenticate();
      const isAuthenticated = account.user.isAuthenticated();
      expect(isAuthenticated).toBe(true);
    });

    it('should return the user object', async () => {
      const output = await account.authenticate();
      expect(output).toBeInstanceOf(User);
    });
  });

  describe('getUserAccount', () => {
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should authenticate user during getUserAccount', async () => {
      const spy = jest.spyOn(account, 'authenticate');
      await account.getUserAccount();
      expect(spy).toHaveBeenCalled();
    });

    it('should get user account object', async () => {
      const output = await account.getUserAccount();
      expect(output).toBeDefined();
    });
  });

  describe('getBalances', () => {
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should authenticate user during getBalances', async () => {
      const spy = jest.spyOn(account, 'authenticate');
      await account.getBalances();
      expect(spy).toHaveBeenCalled();
    });

    it('should get balance object', async () => {
      const balances = await account.getBalances();
      expect(Object.keys(balances)).toEqual(Object.keys(mock.balances));
    });
  });

  describe('getBuyingPower', () => {
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should authenticate user during getBuyingPower', async () => {
      const spy = jest.spyOn(account, 'authenticate');
      await account.getBuyingPower();
      expect(spy).toHaveBeenCalled();
    });

    it('should return an integer', async () => {
      const buyingPower = await account.getBuyingPower();
      expect(typeof buyingPower).toEqual('number');
    });
  });

  describe('getPortfolio', () => {
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should authenticate user during getPortfolio', async () => {
      const spy = jest.spyOn(account, 'authenticate');
      await account.getPortfolio();
      expect(spy).toHaveBeenCalled();
    });

    it('should return an array', async () => {
      const portfolio = await account.getPortfolio();
      expect(Array.isArray(portfolio)).toEqual(true);
    });

    it('portfolio array should have parsed objects', async () => {
      const portfolio = await account.getPortfolio();
      const actual = Object.keys(portfolio[0]);
      const expected = Object.keys(mock.portfolio[0]);
      expect(actual).toEqual(expected);
    });
  });
});
