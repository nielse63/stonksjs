const axios = require('axios').default;
const _ = require('lodash');
const StonksResponse = require('./StonksResponse');

/**
 * Utility class to fetch data
 *
 * @class
 * @example
 * const { StonksAPI } = require('@stonksjs/api');
 *
 * const api = new StonksAPI();
 * const data = await api.get('https://some-url.com/api/data');
 */
class StonksAPI {
  /**
   * Creates an instance of StonksAPI
   * @param {object} [options={}] - Config object to pass to axios
   */
  constructor(options = {}) {
    this.options = _.merge(
      {
        headers: {
          Accept: '*/*',
        },
      },
      options,
    );
  }

  /**
   * Makes a request to the provided URL
   *
   * @param {string} url - The URL to fetch data from
   * @returns {Promise} - Resolves to the data type from the requested endpoint
   * @fulfil {*}
   * @reject {Error}
   */
  async get(url) {
    let output = {};
    try {
      const response = await axios.get(url, this.options);
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
}

module.exports = StonksAPI;
