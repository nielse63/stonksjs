const StonksRequest = require('../StonksRequest');
const _ = require('lodash');
const cheerio = require('cheerio');
const axios = require('axios');
const mock404 = require('../__mocks__/404page.mock');

const url = 'https://robinhood.com/collections/etf';

jest.mock('axios');

describe('StonksRequest', () => {
  let request;
  beforeEach(() => {
    request = new StonksRequest(url);
    const resp = {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {},
      data: {},
    };
    axios.get.mockResolvedValue(resp);
  });

  it('should define host based on url', () => {
    const expected = 'robinhood.com';
    const actual = _.get(request, 'options.headers.Host', '');

    expect(actual).toEqual(expected);
    expect(request.host).toEqual(expected);
  });

  it('should return response object on fetch', async () => {
    const response = await request.fetch();
    expect(response).toBeObject();
    expect(response).toContainKeys([
      'status',
      'statusText',
      'headers',
      'config',
      'request',
      'data',
    ]);
  });

  it('should override url property if defined in fetch', async () => {
    const newUrl = 'https://robinhood.com/collections/reit';
    await request.fetch(newUrl);
    expect(request.url).toEqual(newUrl);
  });

  it('should set error object for 404 pages', async () => {
    const newUrl = 'https://robinhood.com/collections/not-found';
    const resp = {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {},
      data: mock404,
    };
    axios.get.mockResolvedValue(resp);
    await request.fetch(newUrl);
    expect(request.error.code).toEqual(404);
    expect(request.error.message).toEqual('Page not found');
  });

  it('should reset properties', async () => {
    request.error = { code: 400, message: 'Some error' };
    request.response = { data: '' };
    request.resetProperties();
    expect(_.isEmpty(request.error)).toBe(true);
    expect(_.isEmpty(request.response)).toBe(true);
  });

  it('return default error object if no h1 elements found', async () => {
    request.$ = cheerio.load(
      mock404
        .replace('<h1 class="css-143xv0r">404</h1>', '')
        .replace('<h1 class="css-143xv0r">Page not found</h1>', ''),
    );
    const error = request.getError();

    expect(error.code).toEqual(500);
    expect(error.message).toEqual('Unknown error occured');
  });
});
