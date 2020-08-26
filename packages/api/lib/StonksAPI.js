const axios = require('axios').default;
const _ = require('lodash');
const StonksResponse = require('./StonksResponse');

module.exports = class StonksAPI {
  static defaultOptions = {
    headers: {
      Accept: '*/*',
    },
  };

  constructor(url, options = {}) {
    this.url = url;
    this.options = options;
  }

  async get(options = {}) {
    let output = {};
    try {
      const config = _.merge(StonksAPI.defaultOptions, this.options, options);
      const response = await axios.get(this.url, {
        ...config,
      });
      this.response = new StonksResponse(response);
      output = this.response.toJSON();
      if (!this.response.isOK) {
        console.error(this.response.error);
      }
    } catch (error) {
      output = { error };
      console.error(error);
    }
    return output;
  }
};
