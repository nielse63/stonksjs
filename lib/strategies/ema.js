const { Algorithm } = require('pivotrade');

const { EMA } = Algorithm;

module.exports = {
  indicators: {
    EMA5: new EMA(5),
    EMA12: new EMA(12),
  },
  buySignal({ EMA5, EMA12 }) {
    return EMA5 > EMA12;
  },
  sellSignal({ EMA5, EMA12 }) {
    return EMA5 <= EMA12;
  },
};
