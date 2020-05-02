const createBuyObject = (account, curPrice) => {
  const numShares = Math.floor(account.capital / curPrice);
  const stopLoss = 0.90 * curPrice;
  return {
    limit: curPrice,
    quantity: numShares,
    stop_loss: stopLoss,
  };
};

module.exports = createBuyObject;
