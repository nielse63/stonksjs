const StonksCollection = require('../StonksCollection');

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
    const response = await collection.getSymbols();
    expect(response).toBeArray();
    expect(collection.symbols.length).toBeGreaterThan(0);
  });

  it('should resolve with an empty array for invalid requests', async () => {
    collection = new StonksCollection('not-found');
    const output = await collection.getSymbols();
    expect(output.length).toBe(0);
  });

  it('should return an array of StonksQuote objects', async () => {
    const quotes = await collection.getQuotes();
    expect(quotes.length).toBeGreaterThan(0);
    expect(quotes[0]).toBeObject();
    expect(quotes.length).toBeLessThanOrEqual(collection.limit);
  });
});
