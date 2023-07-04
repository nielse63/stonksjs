import axios from 'axios';
import { error, success } from '../__fixtures__/response';
import { getScreener, getScreenersList, getUrlForScreener } from '../screener';

jest.mock('axios');

const url = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers';

describe('screener', () => {
  beforeEach(() => {
    (axios.get as jest.Mock).mockResolvedValue({ data: success });
  });

  afterEach(() => {
    (axios.get as jest.Mock).mockReset();
  });

  describe('getScreenersList', () => {
    it('should get a list of screeners', async () => {
      const response = await getScreenersList();
      expect(response).toBeArray();
      expect(response.length).toBeGreaterThan(0);
      response.forEach((object) => {
        expect(object).toBeObject();
        expect(object).toContainAllKeys(['name', 'url', 'id']);
      });
    });
  });

  describe('getUrlForScreener', () => {
    it('should return a url for a given screener name', async () => {
      const response = await getUrlForScreener('Top Gainers');
      expect(response).toBeString();
      expect(response).toEqual(url);
    });

    it('should return a url for a given screener id', async () => {
      const response = await getUrlForScreener('topgainers');
      expect(response).toBeString();
      expect(response).toEqual(url);
    });

    it('should throw an error if screener is not found', async () => {
      await expect(getUrlForScreener('not found')).rejects.toThrow(
        'Screener not found',
      );
    });
  });

  describe('getScreener', () => {
    it('should accept a screener name or id', async () => {
      const response = await getScreener('Top Gainers');
      expect(response).toBeArray();
      expect(response.length).toBeGreaterThan(0);
    });

    it('should return an array of symbols', async () => {
      const response = await getScreener(url);
      expect(response).toBeArray();
      expect(response.length).toBeGreaterThan(0);
    });

    it('should have a max of 20 items', async () => {
      const response = await getScreener(url);
      expect(response.length).toBeLessThanOrEqual(20);
    });

    it('should return symbols (no other strings)', async () => {
      const response = await getScreener(url);
      response.forEach((ticker) => {
        expect(/[A-Z]{1,5}/.test(ticker as string)).toBeTrue();
      });
    });

    it('should handle condition where only one cell is in a row', async () => {
      (axios.get as jest.Mock).mockResolvedValue({ data: error });
      const response = await getScreener(url);
      expect(response).toBeArrayOfSize(0);
    });
  });
});
