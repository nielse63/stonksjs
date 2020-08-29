const StockScreener = require('../StockScreener');

const screen = Object.keys(StockScreener.screens)[0];

describe('StockScreener', () => {
  let screener;
  beforeEach(() => {
    screener = new StockScreener();
  });

  it('should be defined', () => {
    expect(StockScreener).toBeDefined();
  });

  it('should return array of available screens', () => {
    const screens = StockScreener.listScreens();
    expect(screens).toBeArray();
  });

  it('should return an array of symbols', async () => {
    const response = await screener.getScreenerResults(screen);
    expect(response).toBeArray();
  });

  it('should return symbols (no other strings)', async () => {
    const response = await screener.getScreenerResults(screen);
    response.forEach((symbol) => {
      expect(/[A-Z]{1,5}/.test(symbol)).toBe(true);
    });
  });
});
