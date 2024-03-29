import * as core from '..';

describe('@stonksjs/core', () => {
  it('should be an object', () => {
    expect(core).toBeObject();
  });

  it('should include all packages', () => {
    expect(core).toContainKeys(['finviz', 'quote', 'stockScreener']);
  });
});
