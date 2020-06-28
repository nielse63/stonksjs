const fs = require('fs-extra');
const algotrader = require('algotrader');
const _ = require('lodash');
const path = require('path');
const { isBefore, parseISO } = require('date-fns');
const parseObject = require('./helpers/parseObject');

const { Robinhood } = algotrader;

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#User

class Account {
  static userFile = path.resolve(__dirname, '../data/user.json');

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
    this.accountValue = 0;
  }

  static createDefaultObjectFromProps(props = []) {
    const defaultObject = props.reduce((output, prop) => ({
      ...output,
      [prop]: null,
    }), {});
    return parseObject(defaultObject);
  }

  async parseSingleObject(object = {}) {
    const {
      symbol,
      quantity,
      averageBuy: { price },
      dates: { originalPurchase: purchaseDate },
      InstrumentObject,
    } = object;
    const name = InstrumentObject.getSimpleName();
    const type = InstrumentObject.getType();
    const id = InstrumentObject.getID();
    const quote = await InstrumentObject.getQuote(this.user);
    const lastPrice = quote.getLast();

    return parseObject({
      symbol,
      quantity,
      buyPrice: price,
      lastPrice,
      purchaseDate,
      name,
      type,
      id,
    });
  }

  async parseArray(array = []) {
    const output = [];
    for (const object of array) {
      const results = await this.parseSingleObject(object);
      output.push(results);
    }
    return output;
  }

  async parsePortfolio(portfolioObject) {
    const { array } = portfolioObject;
    return this.parseArray(array);
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
      this.portfolio = await this.user.getPortfolio();
      const output = await this.parsePortfolio(this.portfolio);
      return output;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  async getAccountValue() {
    try {
      await this.authenticate();
      const { cash } = await this.getBalances();
      const { array: items } = await this.user.getPortfolio();
      const values = [cash];
      for (const item of items) {
        const { quantity, InstrumentObject } = item;
        const quote = await InstrumentObject.getQuote(this.user);
        const lastPrice = await quote.getLast();
        const value = lastPrice * quantity;
        values.push(value);
      }
      this.accountValue = values.reduce((total, value) => total + value, 0);
    } catch (error) {
      console.error(error);
    }
    return this.accountValue;
  }

  async toJSON() {
    try {
      await this.authenticate();
      const json = {
        balances: await this.getBalances(),
        account: await this.getUserAccount(),
        portfolio: await this.getPortfolio(),
        accountValue: await this.getAccountValue(),
      };
      return json;
    } catch (error) {
      console.error(error);
    }
    return {
      balances: null,
      account: null,
      portfolio: null,
      accountValue: null,
    };
  }
}

module.exports = Account;
