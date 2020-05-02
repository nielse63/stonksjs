const getAssetData = require('../getAssetData');
const emaData = require('../__mocks__/emaData');

describe('getAssetData', () => {
  let data;
  beforeAll(async () => {
    data = await getAssetData('SPY');
  });

  it('should produce correct values', () => {
    const { length } = data;
    expect(data[0]).toEqual(emaData[0]);
    expect(data[length - 1]).toEqual(emaData[length - 1]);
  });
});
