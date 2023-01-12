const screener = require('../screener');

const url = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers';

describe('screener', () => {
  it('should be defined', () => {
    expect(screener).toBeFunction();
  });

  it('should return an array of symbols', async () => {
    const response = await screener(url);
    expect(response).toBeArray();
    expect(response.length).toBeGreaterThan(0);
  });

  it('should have a max of 20 items', async () => {
    const response = await screener(url);
    expect(response.length).toBeLessThanOrEqual(20);
  });

  it('should return symbols (no other strings)', async () => {
    const response = await screener(url);
    response.forEach((ticker) => {
      expect(/[A-Z]{1,5}/.test(ticker)).toBe(true);
    });
  });
});
