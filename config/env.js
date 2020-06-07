require('dotenv').config();
const debug = require('debug')('stonks:env');
const nodemailer = require('nodemailer');


const sendMail = async (text) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });
  const message = await transporter.sendMail({
    from: `"Trading Bot" <${process.env.MAILTRAP_EMAIL}>`, // sender address
    to: process.env.ROBINHOOD_USERNAME,
    subject: 'Error',
    text,
  });
  console.log(message);
};

process.on('beforeExit', async (code) => {
  if (code) {
    await sendMail(`Process exit event with code: ${code}`);
    console.trace('Process exit event with code: ', code);
  }
});

// process.on('uncaughtException', (err, origin) => {
//   console.log('uncaughtException', { err, origin });
// });

process.on('uncaughtExceptionMonitor', async (err, origin) => {
  const string = JSON.stringify({ err, origin }, null, '  ');
  debug('uncaughtExceptionMonitor', { err, origin });
  await sendMail(string);
});

// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
//   // Application specific logging, throwing an error, or other logic here
// });

// function handle(signal) {
//   debug(`Received ${signal}`);
//   process.exit(signal);
// }

// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.ALPACA_PAPER_TRADING === undefined) {
  process.env.ALPACA_PAPER_TRADING = true;
}
if (process.env.ALPACA_PAPER_TRADING === 'false') {
  process.env.ALPACA_PAPER_TRADING = false;
}

const requiredKeys = [
  'ALPACA_API_KEY',
  'ALPACA_API_SECRET',
  'ALPACA_PAPER_TRADING',
  'ROBINHOOD_USERNAME',
  'ROBINHOOD_PASSWORD',
  'ROBINHOOD_DEVICE_TOKEN',
  'MAILTRAP_EMAIL',
  'MAILTRAP_USER',
  'MAILTRAP_PASSWORD',
];
requiredKeys.forEach((key) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is a required environment key`);
  }
  // console.log(key, process.env[key]);
});
// process.exit();

// console.log(process.env);

module.exports = process.env;
