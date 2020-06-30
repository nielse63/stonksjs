const debug = require('debug');

debug.enable('stonks:*');

class StonksLogger {
  constructor(namespace = '') {
    const logger = debug('stonks');
    this.namespace = namespace;
    this.debugLogger = logger.extend(namespace);
    this.errorLogger = logger.extend(namespace);
    this.debugLogger.log = console.log.bind(console);
  }

  log(...args) {
    this.debugLogger(...args);
  }

  error(...args) {
    this.errorLogger(...args);
  }
}

module.exports = StonksLogger;
