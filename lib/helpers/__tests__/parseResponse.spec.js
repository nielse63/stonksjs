const parseResponse = require('../parseResponse');
const mockResponse = require('../__mocks__/response');

describe('parseResponse', () => {
  let response;
  beforeEach(() => {
    response = parseResponse(mockResponse);
  });

  it('should handle object without error', () => {
    expect(response).toBeInstanceOf(Object);
  });

  it('should camelcase keys', () => {
    const keys = Object.keys(response);
    expect(keys.includes('asset_id')).toBe(false);
    expect(keys.includes('assetId')).toBe(true);
  });

  it('should convert data types', () => {
    expect(typeof response.qty).toEqual('number');
    expect(response.createdAt instanceof Date).toBe(true);
  });
});
