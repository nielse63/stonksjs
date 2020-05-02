const formatBarData = (object) => {
  const {
    t: timestamp,
    o: open,
    h: high,
    l: low,
    c: close,
    v: volume,
  } = object;
  const date = new Date(timestamp * 1000);
  return {
    timestamp,
    date,
    open,
    high,
    low,
    close,
    volume,
  };
};

const formatAssetData = (data = []) => data.map(formatBarData);
module.exports = formatAssetData;
