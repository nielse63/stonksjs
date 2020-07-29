const isPlainObject = require('lodash/isPlainObject');
const camelCase = require('lodash/camelCase');
const formatISO = require('date-fns/formatISO');

const parseNumber = (object) => {
  if (/[a-zA-Z]+/.test(object)) return object;
  const string = String(object)
    .replace(/^\$/, '')
    .replace(/%$/, '')
    .replace(/,/, '');
  return Number(parseFloat(string).toFixed(2));
};

const parseValue = (object) => {
  if (typeof object === 'boolean') {
    return object;
  }
  if (object instanceof Date) {
    return formatISO(object);
  }
  const stringValue = `${object}`;
  return parseNumber(stringValue);
};

const parseObject = (object) => {
  if (object === undefined) return object;

  if (isPlainObject(object)) {
    return Object.entries(object).reduce((output, [key, value]) => {
      const newValue = key === 'id' ? value : parseObject(value);
      const newKey = camelCase(key);
      return {
        ...output,
        [newKey]: newValue,
      };
    }, {});
  }

  if (Array.isArray(object)) {
    return object.map((value) => parseValue(value));
  }

  return parseValue(object);
};

module.exports = parseObject;
