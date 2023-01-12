const axios = require('axios');
const { request } = require('../helpers');

jest.mock('axios');

describe('helpers', () => {
  describe('request', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should reject on axios error', async () => {
      axios.get.mockResolvedValue({ data: '', error: 'error' });
      const req = request('http://test.com');
      expect(req).toReject();
    });

    it('should resolve without an axios error', async () => {
      axios.get.mockResolvedValue({ data: 'data' });
      const req = request('http://test.com');
      expect(req).not.toReject();
    });
  });
});
