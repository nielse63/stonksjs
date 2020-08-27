const StonksAPI = require('../StonksAPI');

const url =
  'https://finance-services.msn.com/Market.svc/ChartAndQuotes?symbols=126.1.MSFT&lang=en-US&chartType=1y';
const options = {
  headers: {
    Referer: 'https://www.msn.com/en-us/money/stockdetails/fi-a2f4r7',
  },
};

describe('StonksAPI', () => {
  let api;
  beforeEach(() => {
    api = new StonksAPI(options);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should handle undefined options arg', () => {
    expect(() => {
      new StonksAPI();
    }).not.toThrow();
  });

  it('should set properties', () => {
    expect(api.options.headers.Referer).toEqual(options.headers.Referer);
  });

  it('should fetch data', async () => {
    const response = await api.get(url);
    expect(response).toBeObject();
    expect(response).toContainAllKeys(['status', 'statusText', 'data', 'error']);
  });

  it('should catch invalid urls', async () => {
    console.error = jest.fn();
    api = new StonksAPI(options);
    const response = await api.get('https://google.com/not-real');
    expect(response).toBeObject();
  });
});
