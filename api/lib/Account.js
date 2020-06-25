const fs = require('fs-extra');
const algotrader = require('algotrader');
const _ = require('lodash');
const { isBefore, parseISO } = require('date-fns');
const { PATHS } = require('./constants');
const parseObject = require('./parseObject');
const Portfolio = require('./Portfolio');

const { Robinhood } = algotrader;

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#User

class Account {
  static userFile = PATHS.dataFile('user.json');

  static accountProperties = [
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
  ]

  static balanceProperties = [
    'unsettledFunds',
    'unsettledDebit',
    'unclearedDeposits',
    'cash',
    'cashHeldForOrders',
    'buyingPower',
    'accountType',
  ]

  constructor(username, password, deviceToken) {
    if (!username) {
      throw new Error('`username` is not defined');
    }
    if (!password) {
      throw new Error('`password` is not defined');
    }
    if (!deviceToken) {
      throw new Error('`deviceToken` is not defined');
    }

    this.user = new Robinhood.User(
      username,
      password,
      deviceToken,
      {
        doNotSaveToDisk: false,
        serializedUserFile: Account.userFile,
      },
    );
    this.balances = Account.createDefaultObjectFromProps(
      Account.balanceProperties,
    );
    this.account = Account.createDefaultObjectFromProps(
      Account.accountProperties,
    );
  }

  static createDefaultObjectFromProps(props = []) {
    const defaultObject = props.reduce((output, prop) => ({
      ...output,
      [prop]: null,
    }), {});
    return parseObject(defaultObject);
  }

  async authenticate() {
    try {
      if (this.user.isAuthenticated()) {
        return this.user;
      }

      if (fs.existsSync(Account.userFile)) {
        const token = fs.readFileSync(Account.userFile, 'utf8');
        const json = JSON.parse(token);
        const today = new Date();
        const expiresDate = parseISO(json.expires);
        if (!isBefore(expiresDate, today)) {
          Object.entries(json).forEach(([key, value]) => {
            if (key in this.user && !this.user[key]) {
              this.user[key] = value;
            }
          });
          return this.user;
        }
      }

      if (!this.user.isAuthenticated()) {
        await this.user.authenticate();
      }

      await this.user.save();
    } catch (error) {
      console.error(error);
    }
    return this.user;
  }

  async getUserAccount() {
    try {
      await this.authenticate();
      const account = await this.user.getAccount();
      const pickedAccount = _.pick(account, Account.accountProperties);
      this.account = parseObject(pickedAccount);
    } catch (error) {
      console.error(error);
    }
    return this.account;
  }

  async getBalances() {
    try {
      await this.authenticate();
      const balances = await this.user.getBalances();
      const pickedBalances = _.pick(balances, Account.balanceProperties);
      this.balances = parseObject(pickedBalances);
    } catch (error) {
      console.error(error);
    }
    return this.balances;
  }

  async getBuyingPower() {
    try {
      if (!this.balances.buyingPower) {
        this.balances = await this.getBalances();
      }
      return parseObject(this.balances.buyingPower);
    } catch (error) {
      console.error(error);
    }
    return 0;
  }

  async getPortfolio() {
    try {
      await this.authenticate();
      const portfolio = await this.user.getPortfolio();
      return Portfolio.parse(portfolio);
    } catch (error) {
      console.error(error);
    }
    return [];
  }
}

module.exports = Account;
