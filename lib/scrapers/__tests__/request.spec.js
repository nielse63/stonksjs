const request = require('../request');

describe('request', () => {
  it('should throw when no url provided', async () => {
    await expect(request()).toReject();
  });

  it('should return a string', async () => {
    const response = await request('https://google.com');
    expect(response).toBeString();
  });
});
