const screener = require('../swing-trending-up');

describe('swing-trending-up', () => {
  it('should resolve the promise', async () => {
    await expect(screener()).toResolve();
  });

  it('should return an array of stings', async () => {
    const response = await screener();
    expect(response).toBeArray();
    response.forEach((value) => {
      expect(value).toBeString();
    });
  });
});
