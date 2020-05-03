/* eslint-disable no-console */
const chalk = require('chalk');

const COLORS_ENUM = {
  info: 'cyan',
  success: 'green',
  warn: 'yellow',
  error: 'red',
};

const PREFIX_ENUM = {
  info: 'INFO',
  success: 'SUCCESS',
  warn: 'WARNING',
  error: 'ERROR',
};

const print = (type, message, ...args) => {
  const color = COLORS_ENUM[type];
  const prefix = PREFIX_ENUM[type];
  console.log(chalk[color](`[${prefix}]`), message);
  if (args.length) {
    console.log(...args);
  }
};

module.exports = {
  info(message, ...args) {
    print('info', message, ...args);
  },
  success(message, ...args) {
    print('success', message, ...args);
  },
  warn(message, ...args) {
    print('warn', message, ...args);
  },
  error(message, ...args) {
    print('error', message, ...args);
  },
};
