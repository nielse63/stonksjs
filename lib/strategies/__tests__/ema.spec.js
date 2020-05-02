const ema = require('../ema');

describe('strategies.ema', () => {
  it('should have required keys', () => {
    expect(Object.keys(ema)).toEqual([
      'indicators',
      'buySignal',
      'sellSignal',
    ]);
  });

  describe('#indicators', () => {
    it('should have required indicator values', () => {
      expect(Object.keys(ema.indicators)).toEqual([
        'EMA5',
        'EMA12',
      ]);
    });

    it('indicators should have required values', () => {
      expect(ema.indicators.EMA5.period).toEqual(5);
      expect(ema.indicators.EMA5.weight).toEqual(0.3333333333333333);
      expect(ema.indicators.EMA12.period).toEqual(12);
      expect(ema.indicators.EMA12.weight).toEqual(0.15384615384615385);
    });
  });

  describe('#buySignal', () => {
    it('should return true when EMA5 > EMA12', () => {
      expect(ema.buySignal({ EMA5: 10, EMA12: 5 })).toBe(true);
    });

    it('should return false when not EMA5 > EMA12', () => {
      expect(ema.buySignal({ EMA5: 5, EMA12: 10 })).toBe(false);
    });
  });

  describe('#sellSignal', () => {
    it('should return true when EMA5 <= EMA12', () => {
      expect(ema.sellSignal({ EMA5: 5, EMA12: 10 })).toBe(true);
      expect(ema.sellSignal({ EMA5: 10, EMA12: 10 })).toBe(true);
    });

    it('should return false when EMA5 > EMA12', () => {
      expect(ema.sellSignal({ EMA5: 10, EMA12: 5 })).toBe(false);
    });
  });
});
