const axios = require('axios');
const fs = require('fs-extra');
const { PATHS } = require('./constants');
const StonksUser = require('./user');

// log historical data
const logHistoricals = async () => {
  const user = await StonksUser.create();
  const { data } = await axios(`https://api.robinhood.com/portfolios/historicals/${user.account}/?interval=day&span=month`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
    },
  });
  const filepath = PATHS.dataFile('historicals.json');
  fs.writeJSONSync(filepath, data);
};

// portfolio
// const logPortfolio = async () => {
//   const user = await StonksUser.create();
//   // const portfolio = await user.getPortfolio();
//   const data = await user.getRecentOrders();
//   console.log(data);
//   // const { data } = await axios(`https://api.robinhood.com/portfolios/historicals/${user.account}/?interval=day&span=month`, {
//   //   headers: {
//   //     Authorization: `Bearer ${user.token}`,
//   //     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
//   //   },
//   // });
//   // const filepath = PATHS.dataFile('historicals.json');
//   // fs.writeJSONSync(filepath, data);
// };


(async () => {
  try {
    await logHistoricals();
    // await logPortfolio();
  } catch (error) {
    console.error(error);
  }
})();
