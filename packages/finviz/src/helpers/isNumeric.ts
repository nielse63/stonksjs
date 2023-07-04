import memoize from 'lodash/memoize';

const isNumeric = (object: unknown) => {
  return !isNaN(parseFloat(object as string)) && isFinite(object as number);
};

export default memoize(isNumeric);
