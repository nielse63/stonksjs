const get = require('lodash/get');
const { filters, listFilters, isValidFilter, request } = require('./helpers');

const parseResponse = (json) => {
  const array = get(json, 'DataList', []);
  return array.map(({ Sym }) => Sym);
};

const getScreenerResults = async (filter) => {
  if (!isValidFilter(filter)) {
    return Promise.reject(new Error(`${filter} is not a valid option`));
  }
  const url = filters[filter];
  const json = await request(url);
  const symbols = parseResponse(json);
  return symbols;
};

module.exports = {
  getScreenerResults,
  listFilters,
};
