// validates the alpaca api structure
// should be run nightly
const Alpaca = require('@alpacahq/alpaca-trade-api');
const env = require('../config/env');
const mockClock = require('../__mocks__/alpaca.clock.mock');
const mockBars = require('../__mocks__/alpaca.bars.mock');

let alpaca;
const symbols = ['AAPL'];
const intervals = 3;

describe('alpaca', () => {
  beforeAll(() => {
    alpaca = new Alpaca({
      keyId: env.ALPACA_API_KEY,
      secretKey: env.ALPACA_API_SECRET,
      paper: env.ALPACA_PAPER_TRADING,
      usePolygon: false,
    });
  });

  it('should be defined', () => {
    expect(alpaca).toBeDefined();
  });

  describe('getClock', () => {
    it('should get clock object', async () => {
      const clockKeys = Object.keys(mockClock);
      const clock = await alpaca.getClock();
      expect(Object.keys(clock)).toEqual(clockKeys);
    });
  });

  describe('getBars', () => {
    const [barsSymbol] = Object.keys(mockBars);
    const [symbol] = symbols;
    let bars;
    beforeAll(async () => {
      bars = await alpaca.getBars(
        'day',
        symbols,
        { limit: intervals },
      );
    });

    it('should get bars as object', async () => {
      expect(bars).toBeInstanceOf(Object);
    });

    it('should have symbols as keys', async () => {
      expect(Object.keys(bars)).toEqual(symbols);
    });

    it('should return expected number of intervals', async () => {
      expect(bars[symbol].length).toEqual(intervals);
    });

    it('should return expected keys on each bar', async () => {
      const [object] = bars[symbol];
      const [mockObject] = mockBars[barsSymbol];
      expect(Object.keys(object)).toEqual(Object.keys(mockObject));
    });
  });
});
