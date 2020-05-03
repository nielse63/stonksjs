const calculateEma = require('../calculateEma');
const parseAssetData = require('../../helpers/parseAssetData');
const history = require('../__mocks__/history');
const emaData = require('../__mocks__/emaData');

describe('calculateEma', () => {
  let data;
  beforeAll(() => {
    const formattedData = history.map(parseAssetData);
    data = calculateEma(formattedData);
  });

  it('should have EMA keys', () => {
    expect(data[0].EMA5).toBeDefined();
    expect(data[0].EMA12).toBeDefined();
  });

  it('should produce correct values', () => {
    const { length } = data;
    expect(data[0]).toEqual(emaData[0]);
    expect(data[length - 1]).toEqual(emaData[length - 1]);
  });
});
