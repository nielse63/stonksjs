const createSellObject = (account, curPrice) => {
  const { id, quantity } = account.positions[0];
  return {
    id,
    limit: curPrice,
    quantity,
  };
};

module.exports = createSellObject;
