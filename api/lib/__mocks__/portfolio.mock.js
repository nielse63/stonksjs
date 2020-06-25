module.exports = {
  response: {
    symbol: 'ABC',
    quantity: 12.34,
    averageBuy: {
      price: 100,
      pending: 0,
      intraday: 0,
    },
    dates: {
      originalPurchase: new Date('2020-04-10T12:07:46.013012Z'),
      lastTrade: new Date('2020-04-10T12:07:46.013012Z'),
    },
    sharesHeld: {
      stockGrants: 0,
      optionsEvents: 0,
      optionsCollateral: 0,
      forBuys: 0,
      forSells: 0,
      pendingFromOptionsEvents: 0,
    },
  },
  mock: [
    {
      symbol: 'ABC',
      quantity: 100,
      price: 100,
      purchaseDate: '2020-04-10T12:07:46.013012Z',
      name: 'Fake Corp',
      type: 'equity',
      id: '1234567-asdf-asdaf-asdf-rcdftvyunijmk',
      links: {
        path: '/api/assets/ABC',
      },
    },
  ],
};
