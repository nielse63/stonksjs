const _ = require('lodash');
const formatISO = require('date-fns/formatISO');

const parseValue = (object) => {
  if (typeof object === 'boolean') {
    return object;
  }
  if (object instanceof Date) {
    return formatISO(object);
  }
  const stringValue = `${object}`;
  return isFinite(parseFloat(stringValue)) ? parseFloat(stringValue) : object;
};

const parseObject = (object) => {
  if (_.isPlainObject(object)) {
    return Object.entries(object).reduce((output, [key, value]) => {
      const newValue = key === 'id' ? value : parseObject(value);
      const newKey = _.camelCase(key);
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
