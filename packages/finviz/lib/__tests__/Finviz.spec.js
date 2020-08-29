const Finviz = require('../Finviz');

const url = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers';
const symbol = 'AACG';

describe('Finviz', () => {
  let finviz;
  beforeEach(() => {
    finviz = new Finviz();
  });

  it('should be defined', () => {
    expect(Finviz).toBeDefined();
  });

  describe('#getQuote', () => {
    it('should throw an error if no symbol is given', async () => {
      await expect(finviz.getQuote()).toReject();
    });

    it('should return an object of data', async () => {
      const response = await finviz.getQuote(symbol);
      expect(response).toBeObject();
    });
  });

  describe('#getScreener', () => {
    it('should throw an error if no url is given', async () => {
      await expect(finviz.getScreener()).toReject();
    });

    it('should return an array of symbols', async () => {
      const response = await finviz.getScreener(url);
      expect(response).toBeArray();
    });

    it('should have a max of 20 items', async () => {
      const response = await finviz.getScreener(url);
      expect(response.length).toBeLessThanOrEqual(20);
    });

    it('should return symbols (no other strings)', async () => {
      const response = await finviz.getScreener(url);
      response.forEach((ticker) => {
        expect(/[A-Z]{1,5}/.test(ticker)).toBe(true);
      });
    });
  });
});
