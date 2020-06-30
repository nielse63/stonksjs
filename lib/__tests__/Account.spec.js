// const { Robinhood } = require('algotrader');
const _ = require('lodash');
const env = require('../../config/env');
const Account = require('../Account');
const mock = require('../__mocks__/user.mock');

describe('Account', () => {
  it('should be defined', () => {
    expect(Account).toBeDefined();
  });

  describe('static props', () => {
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
    let account;
    beforeAll(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    it('should define a `balances` prop', () => {
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

    it('should define a `accountValue` prop', () => {
      expect(account.accountValue).toEqual(0);
    });
  });

  describe('methods', () => {
    let account;
    beforeEach(() => {
      account = new Account(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      );
    });

    describe('getUserAccount', () => {
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

    describe('getAccountValue', () => {
      it('should authenticate user during getAccountValue', async () => {
        const spy = jest.spyOn(account, 'authenticate');
        await account.getPortfolio();
        expect(spy).toHaveBeenCalled();
      });

      it('should return a number', async () => {
        const value = await account.getAccountValue();
        expect(typeof value === 'number').toBe(true);
      });

      it('should return a value greater than 0', async () => {
        const value = await account.getAccountValue();
        expect(value).toBeGreaterThan(0);
      });
    });

    describe('toJSON', () => {
      it('should authenticate user during toJSON', async () => {
        const spy = jest.spyOn(account, 'authenticate');
        await account.getPortfolio();
        expect(spy).toHaveBeenCalled();
      });

      it('should return an object', async () => {
        const json = await account.toJSON();
        expect(_.isPlainObject(json)).toBe(true);
      });

      it('should match desired schema', async () => {
        const json = await account.toJSON();
        const actual = Object.keys(json);
        // const expected = Object.keys(mock);
        expect(actual).toEqual(['balances', 'account']);
      });
    });
  });
});
