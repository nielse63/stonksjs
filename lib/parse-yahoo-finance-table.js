const $ = require('cheerio');
const assert = require('assert');
const camelCase = require('lodash/camelCase');

const TABLE_KEY_MAP = {
  'Price (Intraday)': 'price',
  '% Change': 'changePercent',
  'Avg Vol (3 month)': 'volumeAvg',
  'PE Ratio (TTM)': 'peRatio',
};

const TABLE_KEYS_EXCLUDE = [
  '52 Week Range',
];

const parseValue = (string) => {
  const floatMatches = string.match(/\d+(\.|,)\d+/);
  if (!floatMatches) return string;
  return parseFloat(floatMatches[0].replace(/,/g, ''));
};

const parseTableRow = (rowElement) => {
  const cells = rowElement.find('> td');
  const output = {};
  cells.each((i, cell) => {
    const value = $(cell).text().trim();
    const ariaLabel = $(cell).attr('aria-label');
    if (TABLE_KEYS_EXCLUDE.includes(ariaLabel)) return;
    const key = TABLE_KEY_MAP[ariaLabel] || camelCase(ariaLabel);
    output[key] = parseValue(value);
  });
  return output;
};

const parseTable = (table) => {
  assert.equal(table.length, 1, 'Could not find #scr-res-table element');

  const rows = table.find('> tbody > tr');
  assert(rows.length > 1, 'Could not find row elements');

  const results = [];
  rows.each((i, row) => {
    const object = parseTableRow($(row));
    results.push(object);
  });
  return results;
};

module.exports = parseTable;
