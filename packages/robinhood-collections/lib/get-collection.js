const axios = require('axios');
const cheerio = require('cheerio');
const collections = require('./collections');

const getCollection = async (collection) => {
  const collectionIds = collections.map(({ id }) => id);
  if (!collectionIds.includes(collection)) {
    return Promise.reject(new Error(`${collection} is an invalid collection`));
  }

  const url = `https://robinhood.com/collections/${collection}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const selector = '.main-container .table tbody tr td:nth-child(2)';
  const symbols = $(selector)
    .map((i, cell) => $(cell).text())
    .get();
  return symbols;
};

module.exports = getCollection;
