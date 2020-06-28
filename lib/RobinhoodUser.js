require('dotenv').config();
const fs = require('fs-extra');
const { Robinhood } = require('algotrader');
const path = require('path');
const os = require('os');
const { isBefore, parseISO } = require('date-fns');

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#User

class RobinhoodUser {
  static userFile = path.resolve(os.tmpdir(), 'stonks-user.json');

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

    this.user = new Robinhood.User(
      username,
      password,
      deviceToken,
      {
        doNotSaveToDisk: false,
        serializedUserFile: RobinhoodUser.userFile,
      },
    );
  }

  async authenticate() {
    try {
      if (this.user.isAuthenticated()) {
        return this.user;
      }

      if (fs.existsSync(RobinhoodUser.userFile)) {
        const token = fs.readFileSync(RobinhoodUser.userFile, 'utf8');
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
}

module.exports = RobinhoodUser;
