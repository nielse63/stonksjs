/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = {
  info(message) {
    console.log(chalk.cyan('[INFO]'), message);
  },
  error(message) {
    console.log(chalk.red('[ERROR]'), message);
  },
};
