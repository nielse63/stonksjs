import axios from 'axios';
import { request } from '../helpers';

jest.mock('axios');

describe('helpers', () => {
  describe('request', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should reject on axios error', async () => {
      axios.get.mockRejectedValue(new Error('error'));
      await expect(request('http://test.com')).rejects.toThrow('error');
    });

    it('should resolve without an axios error', async () => {
      axios.get.mockResolvedValue({ data: 'data' });
      await expect(request('http://test.com')).resolves.toEqual('data');
    });

    it('should reject for non-object data types', async () => {
      axios.get.mockResolvedValue('string');
      await expect(request('http://test.com')).rejects.toThrow(
        'Invalid response: string',
      );
    });
  });
});
