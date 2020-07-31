require('dotenv').config();
const fs = require('fs-extra');
const path = require('path');
const omit = require('lodash/omit');
const { Robinhood } = require('algotrader');
const { RobinhoodEnums } = require('../../helpers/constants');
const parseObject = require('../../helpers/parseObject');

const userToken = RobinhoodEnums.UserTokenFile;

class RobinhoodAccount {
  constructor(
    username = process.env.ROBINHOOD_USERNAME,
    password = process.env.ROBINHOOD_PASSWORD,
    deviceToken = process.env.ROBINHOOD_DEVICE_TOKEN
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

    this.user = new Robinhood.User(username, password, deviceToken, {
      doNotSaveToDisk: false,
      serializedUserFile: userToken,
    });
    this.balances = {};
    this.portfolio = null;
  }

  get isAuthenticated() {
    return this.user.isAuthenticated();
  }

  authenticate = async () => {
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
  };

  getBuyingPower = async () => {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const buyingPower = await this.user.getBuyingPower();
    return buyingPower;
  };

  getBalances = async () => {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const response = await this.user.getBalances();
    return parseObject(response);
  };

  // getPortfolio = async () => {
  //   if (!this.isAuthenticated) {
  //     await this.authenticate();
  //   }

  //   const portfolio = await this.user.getPortfolio()
  //   return new RobinhoodPortfolio(portfolio)
  // }

  getPositions = async () => {
    if (!this.portfolio) {
      await this.getPortfolio();
    }
    return this.portfolio.positions;
  };

  getOrders = async () => {
    if (!this.isAuthenticated) {
      await this.authenticate();
    }

    const orders = await this.user.getRecentOrders();
    return orders.map(({ response }) => omit(response, ['urls', 'clientID']));
  };
}

module.exports = RobinhoodAccount;
