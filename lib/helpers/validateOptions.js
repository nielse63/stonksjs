module.exports = (options, requiredFields = []) => {
  const undefinedFields = requiredFields
    .filter((key) => !(key in options) || options[key] === undefined);
  if (undefinedFields.length) {
    throw new Error(`Required fields are undefined: ${undefinedFields.join(', ')}`);
  }
  return !!undefinedFields.length;
};
