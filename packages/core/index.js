const StonksCore = require('./lib/StonksCore');

module.exports = () => {
  const core = new StonksCore();

  return core;
};
