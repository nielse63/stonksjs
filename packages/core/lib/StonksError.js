const _ = require('lodash');

class StonksError extends Error {
  constructor(error = '', ...args) {
    super(error, ...args);

    this.code = 0;
    this.message = error;

    if (_.isPlainObject(error)) {
      this.code = _.get(error, 'code', '');
      this.message = _.get(error, 'message', '');
    }
  }
}

module.exports = StonksError;
