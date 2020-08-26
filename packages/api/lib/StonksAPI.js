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
    let output = {};
    try {
      const config = _.merge(StonksAPI.defaultOptions, this.options, options);
      const response = await axios({
        url: this.url,
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

  async get() {
    const response = await this.request();
    return response;
  }

  // async save() {
  //   const response = await this.request({ method: 'post' });
  //   return response;
  // }
};
