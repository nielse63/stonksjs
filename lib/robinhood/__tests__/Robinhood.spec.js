const algotrader = require('algotrader');
const Robinhood = require('../Robinhood');

describe('Robinhood', () => {
  let robinhood;
  beforeEach(() => {
    robinhood = new Robinhood(
      process.env.ROBINHOOD_USERNAME,
      process.env.ROBINHOOD_PASSWORD,
      process.env.ROBINHOOD_DEVICE_TOKEN,
    );
  });

  describe('constructor', () => {
    it('should throw error on undefined username', () => {
      expect(() => new Robinhood(null, null, null)).toThrow('`username` is not defined');
    });

    it('should throw error on undefined password', () => {
      expect(() => new Robinhood(process.env.ROBINHOOD_USERNAME, null, null)).toThrow(
        '`password` is not defined',
      );
    });

    it('should throw error on undefined deviceToken', () => {
      expect(
        () => new Robinhood(process.env.ROBINHOOD_USERNAME, process.env.ROBINHOOD_PASSWORD, null),
      ).toThrow('`deviceToken` is not defined');
    });

    it('should not throw error when args are defined', () => {
      expect(
        () => new Robinhood(
          process.env.ROBINHOOD_USERNAME,
          process.env.ROBINHOOD_PASSWORD,
          process.env.ROBINHOOD_DEVICE_TOKEN,
        ),
      ).not.toThrow();
    });

    it('should use env vars by default', () => {
      expect(() => new Robinhood()).not.toThrow();
    });
  });

  describe('authenticate', () => {
    it('should not be authenticated by default', async () => {
      const { isAuthenticated } = robinhood;
      expect(isAuthenticated).toBe(false);
    });

    it('should authenticate the user', async () => {
      await robinhood.authenticate();
      const { isAuthenticated } = robinhood;
      expect(isAuthenticated).toBe(true);
    });

    it('should return the user object', async () => {
      const output = await robinhood.authenticate();
      expect(output).toBeInstanceOf(algotrader.Robinhood.User);
    });
  });
});
