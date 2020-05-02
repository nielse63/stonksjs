const backtest = require('../backtest');

const symbol = 'SPY';
const capital = 10000;

describe('backtest', () => {
  let data;
  beforeAll(async () => {
    data = await backtest({ symbol, capital });
  });

  it('should resolve data object', () => {
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Object);
  });

  it('should have required keys', () => {
    const keys = [
      'price',
      'money',
      'positions',
      'performance',
      'indicators',
      'settings',
    ];
    expect(Object.keys(data)).toEqual(keys);
  });
});
