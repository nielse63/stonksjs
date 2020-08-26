const StonksAPI = require('./lib/StonksAPI');

module.exports = (...args) => new StonksAPI(...args);
