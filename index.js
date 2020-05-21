require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');
const { SMA } = require('technicalindicators');
const _ = require('lodash');
const scrape = require('./scrape');

const ONE_MINUTE = 1000 * 60;

class Algo {
  constructor() {
    this.timeout = ONE_MINUTE;
    this.symbols = [
      // stocks
      // 'AMZN',
      // 'GOOGL',
      // 'AAPL',
      // 'TSLA',
      // 'MSFT',
      // 'OKTA',

      // funds
      'XLK',
      'XLI',
      'SPLG',
      'SPMD',
      'SPSM',
      'STIP',
      'USRT',
      'IEUR',
      'HDV',
      'ILTB',
      'IAGG',
      'AGG',
    ];
    this.data = {};
    this.alpaca = new Alpaca({
      keyId: process.env.ALPACA_API_KEY,
      secretKey: process.env.ALPACA_API_SECRET,
      paper: true,
      usePolygon: false,
    });
  }

  async getAvailableAmount() {
    this.account = await this.alpaca.getAccount();
    const { cash } = this.account;
    return cash / this.symbols.length;
  }

  calcMovingAverage(period, values) {
    return SMA.calculate({ period, values });
  }

  async parseBarResponse(object) {
    this.positions = await this.alpaca.getPositions();

    Object.entries(object).forEach(async ([symbol, data]) => {
      this.data[symbol] = {
        close: [],
        lastClose: 0,
        maFast: [],
        // maSlow: [],
        response: data,
        // trend: 0,
        positions: 0,
      };
      const close = data.map(({ closePrice }) => closePrice);
      this.data[symbol].close = close;
      // const quote = await this.alpaca.lastQuote(symbol);
      this.data[symbol].lastClose = _.last(close);
      this.data[symbol].maFast = this.calcMovingAverage(5, close);
      // this.data[symbol].maSlow = this.calcMovingAverage(12, close);
      // const isTrendingUp = _.last(this.data[symbol].maFast) > _.last(this.data[symbol].maSlow);
      // this.data[symbol].trend = isTrendingUp ? 1 : -1;
      try {
        // this.data[symbol].positions = await this.alpaca.getPosition(symbol);
        const position = this.positions.find((obj) => obj.symbol === symbol);
        if (position) {
          this.data[symbol].positions = parseFloat(position.qty);
        }
      } catch (error) {
        if (error.statusCode !== 404) {
          console.error(error);
        }
      }
    });
    await Promise.resolve();
  }

  shouldBuy(symbol) {
    // const { positions, lastClose, maFast } = this.data[symbol];
    // return positions <= 0 && lastClose >= _.last(maFast);
    const { lastClose, maFast } = this.data[symbol];
    return lastClose >= _.last(maFast);
  }

  shouldSell(symbol) {
    // const { trend } = this.data[symbol];
    // return trend < 0;
    const { positions, lastClose, maFast } = this.data[symbol];
    return positions > 0 && lastClose < _.last(maFast);
  }

  async getBars() {
    const limit = 100;
    const bars = await this.alpaca.getBars(
      '1Min',
      this.symbols,
      { limit },
    );
    await this.parseBarResponse(bars);
  }

  async buy(symbol) {
    const availableCash = await this.getAvailableAmount();
    const { lastClose } = this.data[symbol];
    const qty = Math.floor(availableCash / lastClose);
    if (qty <= 0) {
      console.log(`qty of ${symbol} <= 0`);
      return;
    }
    console.log(`buy ${qty} shares of ${symbol} @ ${lastClose}`);
    try {
      await this.alpaca.createOrder({
        symbol,
        qty,
        side: 'buy',
        type: 'stop_limit',
        time_in_force: 'day',
        limit_price: lastClose,
        stop_price: lastClose * 0.99,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async sell(symbol) {
    console.log(`liquidate ${symbol}`);
    try {
      await this.alpaca.closePosition(symbol);
    } catch (error) {
      if (error.statusCode !== 404) {
        console.error(error);
      }
    }
  }

  run() {
    const start = async () => {
      // check time
      const clock = await this.alpaca.getClock();
      const { is_open: isOpen } = clock;
      const closingTime = new Date(clock.next_close.substring(
        0,
        clock.next_close.length - 6,
      ));
      const currTime = new Date(clock.timestamp.substring(
        0,
        clock.timestamp.length - 6,
      ));
      this.timeToClose = Math.abs(closingTime - currTime);

      // return if market isn't open
      if (!isOpen) {
        const openTime = new Date(clock.next_open.substring(0, clock.next_close.length - 6));
        this.timeToClose = Math.floor((openTime - currTime) / 1000 / 60);
        console.log(`${this.timeToClose} minutes til next market open.`);
        return;
      }

      // close all positions if within 15 minutes of market close
      if (this.timeToClose < ONE_MINUTE * 5) {
        console.log('closing time');
        // await this.alpaca.closeAllPositions();
        return;
      }

      console.log(`Running at ${(new Date()).toISOString()}`);

      // cancel open orders
      await this.alpaca.cancelAllOrders();

      // get movers
      this.positions = await this.alpaca.getPositions();
      const positionSymbols = this.positions.map(({ symbol }) => symbol);
      const movers = await scrape(5);
      this.symbols = [...new Set([
        ...this.symbols,
        ...movers,
        ...positionSymbols,
      ])].filter(Boolean);
      _.pull(this.symbols, 'NOW');
      console.log(`trading ${this.symbols.toString()}`);

      // get bars data
      await this.getBars();

      // execute
      const promises = this.symbols.map((symbol) => {
        if (this.shouldBuy(symbol)) {
          return this.buy(symbol);
        } if (this.shouldSell(symbol)) {
          return this.sell(symbol);
        }
        console.log(`holding ${symbol}`);

        return Promise.resolve();
      });
      await Promise.all(promises);
      console.log('***************************************');
    };

    start().then(() => {
      this.interval = setInterval(start, this.timeout);
    });
  }
}

const algo = new Algo();
algo.run();
