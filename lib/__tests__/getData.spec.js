const getData = require('../getData');
// const mockBars = require('../../__mocks__/alpaca.bars.mock');

describe('getData', () => {
  // should accept two arguments, symbols and indicators
  describe('#run', () => {
    it('should accept symbols and indicators as args', () => {
      expect(getData).toBeDefined();
    });
  });

  // should handle default arguments
  // should return an object where the keys are symbols, the value is an array of bar objects
  // each bar should include an indicator object
  // each indicator object should be acurate
  // each indicator object should include the keys specified in arguments
});
