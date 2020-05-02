/* eslint-disable no-console */
const alpaca = require('../alpaca');

const client = alpaca.websocket;
client.onConnect(() => {
  console.log('Connected');
  client.subscribe([
    'trade_updates',
    'account_updates',
    'T.FB',
    'Q.AAPL',
    'A.FB',
    'AM.AAPL',
  ]);
  // setTimeout(() => {
  //   client.disconnect();
  // }, 30 * 1000);
});
client.onDisconnect(() => {
  console.log('Disconnected');
});
client.onStateChange((newState) => {
  console.log(`State changed to ${newState}`);
});
client.onOrderUpdate((data) => {
  console.log(`Order updates: ${JSON.stringify(data)}`);
});
client.onAccountUpdate((data) => {
  console.log(`Account updates: ${JSON.stringify(data)}`);
});
client.onStockTrades((subject, data) => {
  console.log(`Stock trades: ${subject}, ${data}`);
});
client.onStockQuotes((subject, data) => {
  console.log(`Stock quotes: ${subject}, ${data}`);
});
client.onStockAggSec((subject, data) => {
  console.log(`Stock agg sec: ${subject}, ${data}`);
});
client.onStockAggMin((subject, data) => {
  console.log(`Stock agg min: ${subject}, ${data}`);
});
client.connect();
