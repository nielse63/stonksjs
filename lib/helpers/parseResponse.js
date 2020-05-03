const _ = require('lodash');
const parseISO = require('date-fns/parseISO');
const isNumeric = require('./isNumeric');

const parseResponse = (response) => {
  if (Array.isArray(response)) {
    return response.map(parseResponse);
  }
  const output = {};
  Object.entries(response).forEach(([key, value]) => {
    const newKey = _.camelCase(key);
    if (isNumeric(value)) {
      output[newKey] = parseFloat(value);
      return;
    }
    if (key.endsWith('_at')) {
      output[newKey] = value && parseISO(value);
      return;
    }
    output[newKey] = value;
  });
  return output;
};

module.exports = parseResponse;
