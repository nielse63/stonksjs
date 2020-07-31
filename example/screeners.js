const { screeners } = require('../lib');

(async () => {
  // list all available screeners
  console.log(screeners);

  // all screener functions return an array of strings
  const symbols = await screeners.highYieldDividends();
  console.log(symbols);
})();
