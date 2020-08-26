const { version } = require('../package.json');

class StonksCore {
  constructor() {
    this.version = version;
    this.description = 'Core library class - parent to all other core classes';
  }
}

module.exports = StonksCore;
