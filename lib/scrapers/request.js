const axios = require('axios');

const request = async (url) => {
  if (!url) {
    return Promise.reject(new Error('`url` is undefined'));
  }
  const urlObject = new URL(url);
  const { host } = urlObject;
  const response = await axios.get(url, {
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      Host: host,
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    },
    gzip: true,
  });
  // console.log({ url, host, response });
  const { status, statusText, data } = response;
  if (statusText !== 'OK') {
    return Promise.reject(new Error(`Request failed with error: ${status} ${statusText}`));
  }
  return data;
};

module.exports = request;
