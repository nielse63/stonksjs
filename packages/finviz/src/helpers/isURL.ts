const isURL = (value: string | unknown): boolean => {
  if (typeof value !== 'string') return false;

  let url;
  try {
    url = new URL(value);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
};

export default isURL;
