const Backtest = require('../Backtest');
const mock = require('../__mocks__/backtest.mock');

const symbol = 'MSFT';

describe('Backtest', () => {
  describe('props', () => {
    it('should have static prop of available indicators', () => {
      expect(Backtest.indicators).toEqual(['sma']);
    });

    it('should have required props on init', () => {
      const backtest = new Backtest(symbol);
      expect(backtest.startingCapital).toEqual(10000);
      expect(backtest.indicator).toEqual('');
      expect(backtest.periods).toEqual([]);
      expect(backtest.history).toEqual([]);
      expect(backtest.keys).toEqual([]);
      expect(backtest.series).toEqual(null);
    });
  });

  describe('sma', () => {
    test.skip('should respond with expected shape', async () => {
      const backtest = new Backtest(symbol);
      const results = await backtest.sma(5, 12, 25);
      expect(Object.keys(results)).toEqual(Object.keys(mock));
    });
  });
});
