import axios from 'axios';
import { request } from '../helpers';

jest.mock('axios');

describe('helpers', () => {
  describe('request', () => {
    afterEach(() => {
      (axios.get as jest.Mock).mockReset();
    });

    it('should reject on axios error', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('error'));
      await expect(request('http://test.com')).rejects.toThrow('error');
    });

    it('should resolve without an axios error', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({
        data: { key: 'value' },
      });
      await expect(request('http://test.com')).resolves.toEqual({
        key: 'value',
      });
    });

    it('should reject for non-object data types', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: 'string' });
      await expect(request('http://test.com')).rejects.toThrow(
        'Invalid response data type: string',
      );
    });
  });
});
