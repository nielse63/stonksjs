const { EMA } = require('technicalindicators');

const getCloseData = (data) => data.map(({ close }) => close);

const getEmaData = (period, values) => EMA.calculate({
  period,
  values,
});

module.exports = (data = []) => {
  const closeValues = getCloseData(data);
  const ema5Data = getEmaData(5, closeValues);
  const ema12Data = getEmaData(12, closeValues);
  return data.reverse().map((object, index) => ({
    ...object,
    EMA5: ema5Data[index] || null,
    EMA12: ema12Data[index] || null,
  })).reverse();
};
