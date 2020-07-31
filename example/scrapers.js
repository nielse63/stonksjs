const { scrapers } = require('../lib');

(async () => {
  // list all available screeners
  console.log(scrapers);

  {
    // get symbols from a robinhood collection
    const symbols = await scrapers.robinhood('https://robinhood.com/collections/etf');
    console.log(symbols);
  }

  {
    // get symbols for dividend kinds
    const symbols = await scrapers.dividends(
      'https://dividendvaluebuilder.com/dividend-kings-list'
    );
    console.log(symbols);
  }
})();
