const StonksError = require('../StonksError');

describe('StonksError', () => {
  it('should define code and message with given object', () => {
    const error = new StonksError({ code: 123, message: 'message' });
    expect(error.code).toEqual(123);
  });

  it('should set message if argument is a string', () => {
    const error = new StonksError('message');
    expect(error.code).toEqual(0);
    expect(error.message).toEqual('message');
  });

  it('should create an exception', () => {
    expect(() => {
      throw new StonksError('message');
    }).toThrow('message');
  });
});
