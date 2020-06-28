const { v4: uuid } = require('uuid');

const id = uuid();

module.exports = {
  balances: {
    unsettledFunds: 0,
    unsettledDebit: 0,
    unclearedDeposits: 50,
    cash: 0,
    cashHeldForOrders: 0,
    buyingPower: 0,
    accountType: 'margin',
  },
  account: {
    portfolioCash: 0,
    accountNumber: 1234567890,
    type: 'margin',
    createdAt: '2020-02-13T19:15:22.975807Z',
    updatedAt: '2020-04-10T12:07:46.013012Z',
    deactivated: false,
    buyingPower: 0,
    cashAvailableForWithdrawal: 0,
    cash: 0,
    cashHeldForOrders: 0,
    unclearedDeposits: 50,
    cryptoBuyingPower: 0,
    rhsAccountNumber: 1234567890,
    state: 'active',
    locked: false,
    userId: id,
  },
  portfolio: [
    {
      symbol: 'ABC',
      quantity: 100,
      buyPrice: 100,
      lastPrice: 100,
      purchaseDate: '2020-04-10T12:07:46.013012Z',
      name: 'Fake Corp',
      type: 'equity',
      id,
    },
  ],
  accountValue: 0,
};
