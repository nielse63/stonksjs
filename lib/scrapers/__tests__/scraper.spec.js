const robinhood = require('../robinhood');
const {
  RobinhoodCollections,
  ScreenersURLs,
  DividendCollections,
} = require('../../helpers/constants');
const finviz = require('../finviz');
const dividends = require('../dividends');

describe('scrapers', () => {
  describe('robinhood', () => {
    it('should return array of ticket symbols (strings)', async () => {
      const response = await robinhood(RobinhoodCollections.closedEndFunds);
      expect(response).toBeArray();
      response.forEach((value) => {
        expect(value).toBeString();
        expect(value.length).not.toBeGreaterThan(4);
      });
    });
  });

  describe('finviz', () => {
    it('should return array of ticket symbols (strings)', async () => {
      const response = await finviz(ScreenersURLs.Default);
      expect(response).toBeArray();
      response.forEach((value) => {
        expect(value).toBeString();
        expect(value.length).not.toBeGreaterThan(4);
      });
    });
  });

  describe('dividends', () => {
    it('should return array of ticket symbols (strings)', async () => {
      const response = await dividends(DividendCollections.kings);
      expect(response).toBeArray();
      response.forEach((value) => {
        expect(value).toBeString();
        expect(value.length).not.toBeGreaterThan(4);
      });
    });
  });
});
