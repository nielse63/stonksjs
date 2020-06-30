const StonksLogger = require('../StonksLogger');

describe('StonksLogger', () => {
  let logger;
  beforeEach(() => {
    logger = new StonksLogger('test');
    jest.clearAllMocks();
  });

  it('should create new object', () => {
    expect(logger).toBeInstanceOf(StonksLogger);
  });

  describe('log', () => {
    it('should have log method', () => {
      expect(logger.log).toBeInstanceOf(Function);
    });

    it('log should execute underlying debugLogger', () => {
      logger.debugLogger = jest.fn();
      const spy = jest.spyOn(logger, 'debugLogger');
      logger.log('testing logger.log');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('error', () => {
    it('should have error method', () => {
      expect(logger.error).toBeInstanceOf(Function);
    });

    it('log should execute underlying errorLogger', () => {
      logger.errorLogger = jest.fn();
      const spy = jest.spyOn(logger, 'errorLogger');
      logger.error('testing logger.error');
      expect(spy).toHaveBeenCalled();
    });
  });
});
