const StonksFundamentalsAPI = require('../StonksFundamentalsAPI');

const symbol = 'msft';

describe('StonksFundamentalsAPI', () => {
  let fundamentalsApi;
  beforeEach(() => {
    fundamentalsApi = new StonksFundamentalsAPI(symbol);
  });

  it('should return a data object', async () => {
    const response = await fundamentalsApi.get();
    expect(response).toBeDefined();
  });
});
