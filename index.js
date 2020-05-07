const stonks = require('./lib');

if (!module.parent) {
  stonks().then((results) => {
    /* eslint-disable no-console */
    console.log({ results });
  });
}

module.exports = stonks;
