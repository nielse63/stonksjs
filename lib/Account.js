// const { Robinhood } = require('algotrader');
const _ = require('lodash');
const parseObject = require('./helpers/parseObject');
const RobinhoodUser = require('./RobinhoodUser');
const Market = require('./Market');

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#User

class Account extends RobinhoodUser {
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

  constructor(...args) {
    super(...args);

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
      averageBuy: { price: buyPrice },
      dates: { originalPurchase: purchaseDate },
      InstrumentObject: instrument,
    } = object;
    const name = instrument.getSimpleName();
    const type = instrument.getType();
    const id = instrument.getID();
    const quote = await instrument.getQuote(this.user);
    const originalQuote = JSON.parse(quote.getOriginal());
    const market = new Market();
    const isMarketOpenNow = await market.isOpen();
    const lastPrice = isMarketOpenNow
      ? quote.getLast()
      : originalQuote.last_extended_hours_trade_price;

    return parseObject({
      symbol,
      quantity,
      buyPrice,
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
      const response = await this.user.getPortfolio();
      this.portfolio = await this.parsePortfolio(response);
    } catch (error) {
      console.error(error);
    }
    return this.portfolio;
  }

  async getPortfolioSymbols() {
    this.portfolio = await this.getPortfolio();
    return this.portfolio.map(({ symbol }) => symbol);
  }

  async getAccountValue() {
    try {
      const { unsettledFunds } = await this.getBalances();
      this.accountValue = unsettledFunds;
    } catch (error) {
      console.error(error);
    }
    return this.accountValue;
  }

  async getOrders() {
    try {
      await this.authenticate();
      const response = await this.user.getRecentOrders();
      const orders = response
        .map((order) => order.getResponse());
      return orders;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  async toJSON() {
    try {
      await this.authenticate();
      const json = {
        balances: await this.getBalances(),
        account: await this.getUserAccount(),
      };
      return json;
    } catch (error) {
      console.error(error);
    }
    return {
      balances: null,
      account: null,
    };
  }
}

module.exports = Account;
