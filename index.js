const stonks = require('./lib');

stonks().then((results) => {
  /* eslint-disable no-console */
  console.log({ results });
});
