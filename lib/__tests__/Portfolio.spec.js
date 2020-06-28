const env = require('../../config/env');
const { Robinhood } = require('algotrader');
const Portfolio = require('../Portfolio');
const { response } = require('../__mocks__/portfolio.mock');

describe('Portfolio', () => {
  let portfolio;
  beforeAll(async () => {
    response.InstrumentObject = await Robinhood.Instrument.getBySymbol('MSFT');
  });

  beforeEach(async () => {
    portfolio = new Portfolio(
      env.ROBINHOOD_USERNAME,
      env.ROBINHOOD_PASSWORD,
      env.ROBINHOOD_DEVICE_TOKEN,
    );
  });

  describe('props', () => {
    it('should have MAX_DRAWDOWN static prop', () => {
      expect(Portfolio.MAX_DRAWDOWN).toEqual(0.9);
    });

    it('should have account prop', () => {
      expect(portfolio.account).toBeDefined();
    });

    it('should have user prop', () => {
      expect(portfolio.user).toBeDefined();
    });

    it('should have portfolio prop', () => {
      expect(portfolio.portfolio).toBeDefined();
    });
  });
});
