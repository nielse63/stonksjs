const axios = require('axios').default;
const _ = require('lodash');
const StonksResponse = require('./StonksResponse');

module.exports = class StonksAPI {
  static defaultOptions = {
    method: 'get',
    headers: {
      Accept: '*/*',
    },
  };

  constructor(url, options = {}) {
    this.url = url;
    this.options = options;
  }

  async request(options = {}) {
    try {
      const config = _.merge(StonksAPI.defaultOptions, this.options, options);
      const response = await axios({
        url: this.url,
        ...config,
      });
      this.response = new StonksResponse(response);
      if (!this.response.isOK) {
        console.error(this.response.error);
      }
    } catch (error) {
      console.error(error);
    }
    return this.response.toJSON();
  }

  async get() {
    const response = await this.request();
    return response;
  }

  async save() {
    const response = await this.request({ method: 'post' });
    return response;
  }
};
