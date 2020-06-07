const path = require('path');

const URLS = {
  moversScreener: 'https://finance.yahoo.com/screener/unsaved/95d649b9-faa7-4147-bab5-a060c9c0a9a0?offset=0&count=100',
};

const POSITION_CONSTANTS = {
  stopLossPct: 0.9,
};

const ROOT_PATH = path.resolve(__dirname, '../');
const PATHS = {
  root: ROOT_PATH,
  data: path.resolve(ROOT_PATH, 'data'),
  dataFile(filename) {
    return path.resolve(this.data, filename);
  },
};

module.exports = {
  URLS,
  POSITION_CONSTANTS,
  ROOT_PATH,
  PATHS,
};
