const _ = require('lodash');

module.exports = class StonksResponse {
  constructor(response = {}) {
    this.response = response;
    this.config = response.config;
  }

  get isOK() {
    return _.get(this.response, 'statusText', '') === 'OK';
  }

  get error() {
    if (this.isOK) return null;
    return {
      code: _.get(this.response, 'status', 418),
      message: _.get(
        this.response,
        'statusText',
        'An unknown error occured. Please report all bugs at https://github.com/nielse63/stonksjs/issues',
      ),
    };
  }

  get data() {
    return _.get(this.response, 'data');
  }

  toJSON() {
    return {
      ..._.pick(this.response, ['status', 'statusText', 'data']),
      error: this.error,
    };
  }
};
