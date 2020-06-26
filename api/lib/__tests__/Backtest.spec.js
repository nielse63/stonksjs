const env = require('../env');
const Backtest = require('../Backtest');
const mock = require('../__mocks__/backtest.mock');

const symbol = 'MSFT';
const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

describe('Backtest', () => {
  let backtest;
  beforeEach(() => {
    backtest = new Backtest(symbol, creds);
  });

  describe('props', () => {
    it('should have static prop of available indicators', () => {
      expect(Backtest.indicators).toEqual(['sma']);
    });

    it('should have required props on init', () => {
      expect(backtest.startingCapital).toEqual(10000);
      expect(backtest.indicator).toEqual('');
      expect(backtest.periods).toEqual([]);
      expect(backtest.data).toEqual([]);
      expect(backtest.keys).toEqual([]);
      expect(backtest.series).toEqual(null);
    });
  });

  describe('sma', () => {
    it('should handle a fluid number of arguments', async () => {
      const testValues = [
        [1, 2, 3],
        [5, 12],
        [1],
      ];
      for (const array of testValues) {
        await backtest.sma(...array);
        expect(backtest.periods).toEqual(expect.arrayContaining(array));
      }
    });

    it('should respond with expected shape', async () => {
      const results = await backtest.sma(5, 12);
      expect(Object.keys(results)).toEqual(Object.keys(mock));
    });
  });
});
