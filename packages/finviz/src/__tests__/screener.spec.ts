import axios from 'axios';
import { error, success } from '../__fixtures__/response';
import screener from '../screener';

jest.mock('axios');

const url = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers';

describe('screener', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: success });
  });

  afterEach(() => {
    axios.get.mockReset();
  });

  it('should be defined', () => {
    expect(screener).toBeFunction();
  });

  it('should return an array of symbols', async () => {
    const response = await screener(url);
    expect(response).toBeArray();
    expect(response.length).toBeGreaterThan(0);
  });

  it('should have a max of 20 items', async () => {
    const response = await screener(url);
    expect(response.length).toBeLessThanOrEqual(20);
  });

  it('should return symbols (no other strings)', async () => {
    const response = await screener(url);
    response.forEach((ticker) => {
      expect(/[A-Z]{1,5}/.test(ticker as string)).toBeTrue();
    });
  });

  it('should handle condition where only one cell is in a row', async () => {
    axios.get.mockResolvedValue({ data: error });
    const response = await screener(url);
    expect(response).toBeArrayOfSize(0);
  });
});
