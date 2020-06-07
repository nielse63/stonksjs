const sma = require('./lib/sma');

(async () => {
  console.log(`running stonks in ${process.env.NODE_ENV} mode`);
  await sma();
  setInterval(async () => {
    await sma();
  }, 1000 * 60 * 15);
})();
