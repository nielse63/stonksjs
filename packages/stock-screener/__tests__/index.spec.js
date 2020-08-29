const stockScreener = require('..');

describe('@stonksjs/stock-screener', () => {
  it('should be defined', () => {
    expect(stockScreener).toBeDefined();
    expect(stockScreener).toBeObject();
  });

  it('should have an array of screens', () => {
    expect(stockScreener.screens).toBeArray();
  });

  it('should execute a search function', async () => {
    const screen = stockScreener.screens[0];
    const response = await stockScreener.get(screen);
    expect(response).toBeArray();
  });
});
