const isAfter = require('date-fns/isAfter');
const isToday = require('date-fns/isToday');
const addDays = require('date-fns/addDays');
const { today } = require('./constants');

module.exports = (session, resolve) => {
  const { store } = session;
  const datesChecked = [];
  store.subscribe(() => {
    const state = store.getState();
    const { price: { date } } = state;
    if (datesChecked.includes(date.toString())) {
      return;
    }
    datesChecked.push(date.toString());

    // check if backtesting is complete
    if (isToday(date) || isAfter(addDays(date, 2), today)) {
      resolve(state);
    }
  });
};
