const screener = require('..');

const getFilters = async () => {
  const results = await screener.getFilters();
  console.log(results);
};

const getTopGainers = async () => {
  const results = await screener.getTopGainers();
  console.log(results);
};

// getFilters().catch(console.error);
getTopGainers().catch(console.error);
