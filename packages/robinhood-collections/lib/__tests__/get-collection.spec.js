const getCollection = require('../get-collection');

describe('getCollection', () => {
  it('should be defined', () => {
    expect(getCollection).toBeFunction();
  });

  it('should throw error on invalid collection', async () => {
    await expect(getCollection('invalid')).toReject();
  });

  it('should return array of symbols', async () => {
    const response = await getCollection('reit');
    expect(response).toBeArray();
  });

  it('should return symbols (no other strings)', async () => {
    const response = await getCollection('reit');
    response.forEach((ticker) => {
      expect(/[A-Z]{1,5}/.test(ticker)).toBe(true);
    });
  });
});
