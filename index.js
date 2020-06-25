// const schedule = require('node-schedule');
const sma = require('./lib/sma');

// const rule = new schedule.RecurrenceRule();
// rule.minute = 30;
// console.log('creating new sma job');
// const job = schedule.scheduleJob(rule, async () => {
//   console.log('created new sma job');
//   try {
//     await sma();
//   } catch (error) {
//     console.error(error);
//     job.cancel();
//     process.exit(error.code || 1);
//   }
// });

(async () => {
  await sma();
  setInterval(async () => {
    await sma();
  }, 1000 * 60 * 30);
})();
