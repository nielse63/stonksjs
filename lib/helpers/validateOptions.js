module.exports = (object, requiredFields = []) => {
  const undefinedFields = requiredFields
    .filter((key) => !(key in object) || object[key] === undefined);
  if (undefinedFields.length) {
    const string = undefinedFields.join(', ');
    throw new Error(`Required fields are undefined: ${string}`);
  }
  return !!undefinedFields.length;
};
