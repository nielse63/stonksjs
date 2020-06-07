// instantiated version of the Robinhood.User object
// should save in memory and access it when imported
// singleton
const fs = require('fs-extra');
const debug = require('debug')('stonks:user');
const algotrader = require('algotrader');
const {
  isBefore,
  parseISO,
} = require('date-fns');
const env = require('../config/env');
const { PATHS } = require('./constants');

const { Robinhood } = algotrader;
const serializedUserFile = PATHS.dataFile('user.json');
// let user;
const output = {
  user: null,
  create: async () => {
    this.user = new Robinhood.User(
      env.ROBINHOOD_USERNAME,
      env.ROBINHOOD_PASSWORD,
      env.ROBINHOOD_DEVICE_TOKEN,
      {
        doNotSaveToDisk: false,
        serializedUserFile,
      },
    );

    if (fs.existsSync(serializedUserFile)) {
      const token = fs.readFileSync(serializedUserFile, 'utf8');
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
    return this.user;
  },
};

module.exports = output;
