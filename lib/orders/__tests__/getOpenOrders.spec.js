const getOpenOrders = require('../getOpenOrders');

describe('getOpenOrders', () => {
  it('should return array', async () => {
    const orders = await getOpenOrders();
    expect(Array.isArray(orders)).toBe(true);
  });
});
