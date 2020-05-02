const getAccount = require('../getAccount');
const accountMock = require('../__mocks__/account');

describe('getAccount', () => {
  it('should get position', async () => {
    const account = await getAccount();
    expect(account).toBeDefined();
    expect(account).toBeInstanceOf(Object);
  });

  it('should return parsed object', async () => {
    const account = await getAccount();
    expect(Object.keys(account)).toEqual(Object.keys(accountMock));
  });
});
