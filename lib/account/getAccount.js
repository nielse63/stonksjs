const alpaca = require('../alpaca');
const parseResponse = require('../helpers/parseResponse');

module.exports = async () => {
  const account = await alpaca.getAccount();
  return parseResponse(account);
};
