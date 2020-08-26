const StonksAPI = require('../StonksAPI');

const url = 'https://finance-services.msn.com/Market.svc/ChartAndQuotes?symbols=EDCFF&chartType=1y&isETF=false&iseod=False&lang=en-US&isCS=false&isVol=true';
const options = {
  headers: {
    Referer: 'https://www.msn.com/en-us/money/stockdetails/fi-a2f4r7',
  },
};

describe('StonksAPI', () => {
  let api;
  beforeEach(() => {
    api = new StonksAPI(url, options);
  });

  it('should set properties', () => {
    expect(api.url).toEqual(url);
    expect(api.options.headers.Referer).toEqual(options.headers.Referer);
  });

  it('should fetch data', async () => {
    const response = await api.get();
    expect(response).toBeObject();
    expect(response).toContainAllKeys(['status', 'statusText', 'data', 'error']);
  });
});
