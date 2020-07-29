const cheerio = require('cheerio');
const axios = require('axios');

const request = async (url) => {
  if (!url) {
    throw new Error('URL is required for finviz screener');
  }
  const urlObject = new URL(url);
  const { host } = urlObject;
  const response = await axios.get(url, {
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      Host: host,
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    },
    gzip: true,
  });
  if (response.statusText !== 'OK') {
    throw new Error(`Request failed with error code ${response.status}`);
  }
  return response.data;
};

const getKeys = ($, th) => {
  const keys = [];
  th.each((i, elem) => {
    const key = $(elem).text();
    keys.push(key);
  });
  return keys;
};

const getData = ($, bodyRows, keys) => {
  const data = new Set();
  bodyRows.each((i, row) => {
    const cells = $(row).find('> td');
    cells.each((j, cell) => {
      const value = $(cell).text();
      const key = keys[j];
      if (key === 'Ticker') {
        data.add(value);
      }
    });
  });
  return [...data];
};

const parseHTML = (html) => {
  const $ = cheerio.load(html);
  const th = $('.table-top, .table-top-s');
  const headerRow = th.parent('tr');
  const bodyRows = headerRow.nextAll('tr');
  const keys = getKeys($, th);
  const data = getData($, bodyRows, keys);
  return data;
};

const scraper = async (url) => {
  if (!url) {
    throw new Error('No URL provided to finviz scraper');
  }
  const html = await request(url);
  const data = parseHTML(html);
  return data;
};

module.exports = scraper;
