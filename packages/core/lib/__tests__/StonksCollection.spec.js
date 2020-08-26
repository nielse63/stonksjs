const StonksCollection = require('../StonksCollection');
// const StonksQuote = require('../StonksQuote');
const _ = require('lodash');

describe('StonksCollection', () => {
  jest.setTimeout(30000);
  let collection;
  beforeEach(() => {
    collection = new StonksCollection('reit');
  });

  it('should throw error if no collection provided', async () => {
    expect(() => {
      new StonksCollection();
    }).toThrowError('Collection must be defined');
  });

  it('should fetch data for a valid collection', async () => {
    const response = await collection.fetch();
    expect(response).toBeArray();
    expect(_.isEmpty(collection.quotes)).toBe(false);
  });

  it('should set request error for invalid collection', async () => {
    collection = new StonksCollection('not-found');
    await collection.fetch();
    expect(collection.request.error.code).toEqual(404);
  });

  it('should return an array of StonksQuote objects', async () => {
    const quotes = await collection.fetch();
    expect(quotes.length).toBeGreaterThan(0);
    expect(quotes[0]).toBeObject();
    expect(quotes.length).toBeLessThanOrEqual(collection.limit);
  });
});
