const quote = require('../dist');

const main = async () => {
  const output = await quote('MSFT');
  console.log(output);
};

main().catch(console.error);
