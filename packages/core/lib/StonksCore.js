const { version } = require('../package.json');

class StonksCore {
  constructor() {
    this.version = version;
  }
}

module.exports = StonksCore;
