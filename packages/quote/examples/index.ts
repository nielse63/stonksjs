import quote from '../src';

const main = async () => {
  const output = await quote('MSFT');
  console.log(output);
};

main().catch(console.error);
