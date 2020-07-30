const finviz = require('../finviz');

const url = 'https://finviz.com/screener.ashx';

describe('finviz', () => {
  let response;
  beforeAll(async () => {
    response = await finviz(url);
  });

  it('should throw error when no url is given', async () => {
    await expect(finviz()).toReject();
  });

  it('should return array of strings', () => {
    expect(response).toBeArray();
    response.forEach((value) => {
      expect(value).toBeString();
    });
  });
});
