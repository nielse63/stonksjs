const getAllPositions = require('../getAllPositions');

describe('getAllPositions', () => {
  it('should get positions', async () => {
    const positions = await getAllPositions();
    expect(positions).toBeDefined();
    expect(Array.isArray(positions)).toBe(true);
  });
});
