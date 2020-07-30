const cheerio = require('cheerio');
const get = require('lodash/get');
const request = require('./request');

const selector =
  '#et-boc > div > div.et_pb_section.et_pb_section_2.et_section_regular > div > div.et_pb_column.et_pb_column_3_4.et_pb_column_8.et_pb_css_mix_blend_mode_passthrough.et-last-child > div > div > p';

const parseResponse = (html) => {
  const $ = cheerio.load(html);
  // const selector = '.main-container .table tbody tr td:nth-child(2)';
  const lines = [];
  $(selector).each((i, cell) => {
    lines.push($(cell).text());
  });
  const symbols = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const matches = line.match(/\s\((.*?)\)\s/);
      return get(matches, '[1]', '');
    })
    .filter(Boolean);
  return symbols;
};

const dividends = async (url) => {
  const html = await request(url);
  const data = parseResponse(html);
  return data;
};

module.exports = dividends;
