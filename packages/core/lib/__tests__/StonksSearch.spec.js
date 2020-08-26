const StonksSearch = require('../StonksSearch');

describe('StonksSearch', () => {
  let search;
  beforeEach(() => {
    search = new StonksSearch();
  });

  it('should return a StonksSearch instance', () => {
    expect(search).toBeInstanceOf(StonksSearch);
  });
});
