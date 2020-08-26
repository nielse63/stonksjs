require('dotenv').config();
const fs = require('fs-extra');
const path = require('path');
const omit = require('lodash/omit');
const algotrader = require('algotrader');
const { RobinhoodEnums } = require('../helpers/constants');
const parseObject = require('../helpers/parseObject');

const userToken = RobinhoodEnums.UserTokenFile;

/**
 * @typedef {Object} RobinhoodUser
 */

/**
 * A class that enables interaction with your Robinhood account
 *
 * @class Robinhood
 * @property {RobinhoodUser} user
 * @property {boolean} isAuthenticated
 */
class Robinhood {
  /**
   *Creates an instance of Robinhood.
   * @param {string} [username=process.env.ROBINHOOD_USERNAME]
   * @param {string} [password=process.env.ROBINHOOD_PASSWORD]
   * @param {string} [deviceToken=process.env.ROBINHOOD_DEVICE_TOKEN]
   */
  constructor(
    username = process.env.ROBINHOOD_USERNAME,
    password = process.env.ROBINHOOD_PASSWORD,
    deviceToken = process.env.ROBINHOOD_DEVICE_TOKEN,
  ) {
    if (!username) {
      throw new Error('`username` is not defined');
    }
    if (!password) {
      throw new Error('`password` is not defined');
    }
    if (!deviceToken) {
      throw new Error('`deviceToken` is not defined');
    }

    this.user = new algotrader.Robinhood.User(username, password, deviceToken, {
      doNotSaveToDisk: false,
      serializedUserFile: userToken,
    });
  }

  /**
   * Whether the user is authenticated with Robinhood or not
   *
   * @readonly
   * @memberof Robinhood
   * @returns {boolean}
   */
  get isAuthenticated() {
    return this.user.isAuthenticated();
  }

  /**
   * Authenticate the user with Robinhood
   *
   * @memberof Robinhood
   * @returns {Promise<RobinhoodUser>}
   */
  async authenticate() {
    if (this.isAuthenticated) {
      return this.user;
    }

    // create user local dir if not exists
    const dirname = path.dirname(userToken);
    if (!fs.existsSync(dirname)) {
      fs.mkdirpSync(dirname);
    }

    // authenticate and save the user
    await this.user.authenticate();
    await this.user.save();
    return this.user;
  }

  /**
   * Get the amount you have available to purchase new assets in Robinhood
   *
   * @memberof Robinhood
   * @returns {Promise<number>}
   */
  async getBuyingPower() {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const buyingPower = await this.user.getBuyingPower();
    return buyingPower;
  }

  /**
   * An object of various balances
   *
   * @memberof Robinhood
   * @returns {Promise<object>}
   */
  async getBalances() {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const response = await this.user.getBalances();
    return parseObject(response);
  }

  /**
   * Returns an array of ticker symbols in your portfolio
   *
   * @memberof Robinhood
   * @returns {Promise<object>}
   */
  async getPortfolio() {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const portfolio = await this.user.getPortfolio();
    return portfolio.getSymbols();
  }

  /**
   * Gets all your recent orders
   *
   * @returns {Promise<array>}
   * @memberof Robinhood
   */
  async getOrders() {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const orders = await this.user.getRecentOrders();
    return orders.map(({ response }) => omit(response, ['urls', 'clientID']));
  }

  /**
   * Place anorder with Robinhood
   *
   * @param {string} side - buy or sell
   * @param {string} symbol - ticker symbol
   * @param {object} options - additional options for the order
   * @returns {Promise<object>}
   * @memberof Robinhood
   */
  async submitOrder(side, symbol, options) {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }
    const instrument = await algotrader.Robinhood.Instrument.getBySymbol(symbol);
    const quote = await instrument.getQuote(this.user);
    const order = new algotrader.Robinhood.Order(this.user, {
      ...options,
      instrument,
      quote,
      side,
    });
    const response = await order.submit();
    return response;
  }

  /**
   * Buy an asset in Robinhood
   *
   * @param {string} symbol - ticker symbol
   * @param {object} options - additional options for the order
   * @returns {Promise<object>}
   * @memberof Robinhood
   */
  async buy(symbol, options) {
    const response = await this.submitOrder('buy', symbol, options);
    return response;
  }

  /**
   * Sell an asset in Robinhood
   *
   * @param {string} symbol - ticker symbol
   * @param {object} options - additional options for the order
   * @returns {Promise<object>}
   * @memberof Robinhood
   */
  async sell(symbol, options) {
    const response = await this.submitOrder('sell', symbol, options);
    return response;
  }
}

module.exports = Robinhood;
