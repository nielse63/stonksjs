const path = require('path');
const os = require('os');
const { Robinhood: { User } } = require('algotrader');
const env = require('../../config/env');
const RobinhoodUser = require('../RobinhoodUser');

const userFile = path.resolve(os.tmpdir(), 'stonks-user.json');

describe('RobinhoodUser', () => {
  let account;
  beforeAll(() => {
    account = new RobinhoodUser(
      env.ROBINHOOD_USERNAME,
      env.ROBINHOOD_PASSWORD,
      env.ROBINHOOD_DEVICE_TOKEN,
    );
  });

  describe('static props', () => {
    it('should have `userFile` defined', () => {
      expect(RobinhoodUser.userFile).toBeDefined();
      expect(RobinhoodUser.userFile).toEqual(userFile);
    });
  });

  describe('constructor', () => {
    it('should throw error on undefined username', () => {
      expect(
        () => new RobinhoodUser(null, null, null),
      ).toThrow('`username` is not defined');
    });

    it('should throw error on undefined password', () => {
      expect(() => new RobinhoodUser(
        env.ROBINHOOD_USERNAME,
        null,
        null,
      )).toThrow('`password` is not defined');
    });

    it('should throw error on undefined deviceToken', () => {
      expect(() => new RobinhoodUser(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        null,
      )).toThrow('`deviceToken` is not defined');
    });

    it('should not throw error when args are defined', () => {
      expect(() => new RobinhoodUser(
        env.ROBINHOOD_USERNAME,
        env.ROBINHOOD_PASSWORD,
        env.ROBINHOOD_DEVICE_TOKEN,
      )).not.toThrow();
    });

    it('should use env vars by default', () => {
      expect(() => new RobinhoodUser()).not.toThrow();
    });

    it('should define a `user` prop', () => {
      expect(account.user).toBeDefined();
      expect(account.user).toBeInstanceOf(User);
    });
  });

  describe('methods', () => {
    describe('authenticate', () => {
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
  });
});
