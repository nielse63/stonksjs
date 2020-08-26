const StonksCollection = require('../StonksCollection');
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

  it('should resolve with an empty array for invalid requests', async () => {
    collection = new StonksCollection('not-found');
    await expect(collection.fetch()).toResolve();
    const output = await collection.fetch();
    expect(output.length).toBe(0);
  });

  it('should return an array of StonksQuote objects', async () => {
    const quotes = await collection.fetch();
    expect(quotes.length).toBeGreaterThan(0);
    expect(quotes[0]).toBeObject();
    expect(quotes.length).toBeLessThanOrEqual(collection.limit);
  });
});
