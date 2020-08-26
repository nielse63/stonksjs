const StonksCollection = require('../StonksCollection');
const _ = require('lodash');

describe('StonksCollection', () => {
  let collection;
  beforeEach(() => {
    collection = new StonksCollection('reit');
  });

  it('should fetch data for a valid collection and set quotes array', async () => {
    const response = await collection.fetch();
    expect(response).toBeArray();
    expect(_.isEmpty(collection.quotes)).toBe(false);
  });

  it('should set request error for invalid collection', async () => {
    collection = new StonksCollection('not-found');
    await collection.fetch();
    expect(collection.request.error.code).toEqual(404);
  });
});
