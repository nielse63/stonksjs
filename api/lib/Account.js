const fs = require('fs-extra');
const debug = require('debug')('stonks:Account');
const algotrader = require('algotrader');
const {
  isBefore,
  parseISO,
} = require('date-fns');
const { PATHS } = require('./constants');
const parseObject = require('./parseObject');
const Portfolio = require('./Portfolio');

const { Robinhood } = algotrader;

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#User

class Account {
  static userFile = PATHS.dataFile('user.json');

  constructor(usename, password, deviceToken) {
    this.user = new Robinhood.User(
      usename,
      password,
      deviceToken,
      {
        doNotSaveToDisk: false,
        serializedUserFile: Account.userFile,
      },
    );
    this.balances = {};
    this.buyingPower = 0;
    this.portfolio = null;
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
          debug('user already authenticated');
          return this.user;
        }
      }

      if (!this.user.isAuthenticated()) {
        debug('user is not authenticated, reauthenticating');
        await this.user.authenticate();
      }

      await this.user.save();
      debug('user is authenticated');
    } catch (error) {
      console.error(error);
    }
    return this.user;
  }

  async getBalances() {
    try {
      const balances = await this.user.getBalances();
      this.balances = parseObject(balances);
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
      this.buyingPower = parseObject(this.balances.buyingPower);
    } catch (error) {
      console.error(error);
    }
    return this.buyingPower;
  }

  async getPortfolio() {
    try {
      const portfolio = await this.user.getPortfolio();
      this.portfolio = Portfolio.parse(portfolio);
    } catch (error) {
      console.error(error);
    }
    return this.portfolio;
  }
}

module.exports = Account;
