const cheerio = require('cheerio');
const request = require('./request');

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
  const html = await request(url);
  const data = parseHTML(html);
  return data;
};

module.exports = scraper;
