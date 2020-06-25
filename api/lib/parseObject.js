const _ = require('lodash');
const formatISO = require('date-fns/formatISO');

const parseValue = (object) => {
  if (object instanceof Date) {
    return formatISO(object);
  }
  const stringValue = object && object.toString();
  return isFinite(stringValue) ? parseFloat(stringValue) : object;
};

const parseObject = (object) => {
  if (_.isPlainObject(object)) {
    return Object.entries(object).reduce((output, [key, value]) => {
      const newValue = parseObject(value);
      return {
        ...output,
        [key]: newValue,
      };
    }, {});
  }

  if (Array.isArray(object)) {
    return object.map((value) => parseValue(value));
  }

  return parseValue(object);
};

module.exports = parseObject;
