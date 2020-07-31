require('dotenv').config();
const { Robinhood } = require('../lib');

(async () => {
  const robinhood = new Robinhood(
    process.env.ROBINHOOD_USERNAME,
    process.env.ROBINHOOD_PASSWORD,
    process.env.ROBINHOOD_DEVICE_TOKEN
  );
  // list all methods
  console.log(robinhood);

  // authenticate the user
  await robinhood.authenticate();

  // get available buying power
  const buyingPower = await robinhood.getBuyingPower();
  console.log(buyingPower);

  // get array of ticker symbols in you portfolio
  const portfolio = await robinhood.getPortfolio();
  console.log(portfolio);

  // place a limit buy order for 1 share of Microsoft @ 204.94
  // WARNING: running this will actually place an order
  const buyOrder = await robinhood.buy('MSFT', {
    qty: 1,
    type: 'limit',
    price: 204.94,
  });
  console.log(buyOrder);
})();
