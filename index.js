require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');
const { SMA } = require('technicalindicators');
const _ = require('lodash');
// const scrape = require('./scrape');

const ONE_MINUTE = 1000 * 60;

class Algo {
  constructor() {
    this.timeout = ONE_MINUTE;
    this.buyOrders = [];
    this.symbols = [
      // stocks
      'AMZN',
      'GOOGL',
      'AAPL',
      'TSLA',
      'MSFT',
      'OKTA',
      'SUN',
      'QCOM',
      'TWTR',

      // funds
      // 'XLK',
      // 'XLI',
      // 'SPLG',
      // 'SPMD',
      // 'SPSM',
      // 'STIP',
      // 'USRT',
      // 'IEUR',
      // 'HDV',
      // 'ILTB',
      // 'IAGG',
      // 'AGG',
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
    const { buying_power: cash } = this.account;
    return cash / this.symbols.length / 2;
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
        maFast: 0,
        maSlow: 0,
        response: data,
        // trend: 0,
        positions: 0,
      };
      const close = data.map(({ closePrice }) => closePrice);
      this.data[symbol].close = close;
      // const quote = await this.alpaca.lastQuote(symbol);
      this.data[symbol].lastClose = _.last(close);
      this.data[symbol].maFast = _.last(this.calcMovingAverage(50, close));
      this.data[symbol].maSlow = _.last(this.calcMovingAverage(200, close));
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
    const { maFast, maSlow } = this.data[symbol];
    return maFast >= maSlow;
  }

  shouldSell(symbol) {
    const { positions, maSlow, maFast } = this.data[symbol];
    return positions > 0 && maFast < maSlow;
  }

  async getBars() {
    const limit = 100;
    const bars = await this.alpaca.getBars(
      '15Min',
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
      const order = await this.alpaca.createOrder({
        symbol,
        qty,
        side: 'buy',
        type: 'stop',
        time_in_force: 'day',
        // limit_price: lastClose * 1.01,
        stop_price: lastClose,
      });
      this.buyOrders.push(order.id);
      let intervalCount = 0;
      const buyInterval = setInterval(async () => {
        if (intervalCount > 2) {
          clearInterval(buyInterval);
          return;
        }
        intervalCount += 1;
        const lastOrder = await this.alpaca.getOrder(order.id);
        if (lastOrder.status === 'filled') {
          clearInterval(buyInterval);
          console.log(`placing stop-limit sell for ${symbol}`);
          await this.alpaca.createOrder({
            symbol,
            qty,
            side: 'sell',
            type: 'stop',
            time_in_force: 'day',
            stop_price: lastClose * 0.995,
          });
        }
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }

  async sell(symbol) {
    console.log(`liquidate ${symbol}`);
    try {
      const orders = await this.alpaca.getOrders({
        status: 'open',
      });
      const ordersForSymbol = orders.filter((order) => order.symbol === symbol);
      const promises = ordersForSymbol
        .map((order) => this.alpaca.cancelOrder(order.id));
      await Promise.all(promises);
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
      if (this.timeToClose < ONE_MINUTE * 15) {
        console.log('closing time');
        await this.alpaca.cancelAllOrders();
        process.exit();
        // await this.alpaca.closeAllPositions();
        return;
      }

      console.log('***************************************');
      console.log(`Running at ${(new Date()).toISOString()}`);

      // cancel open buy orders
      // await this.alpaca.cancelAllOrders();
      const orders = await this.alpaca.getOrders({
        status: 'open',
      });
      orders.forEach(async (order) => {
        if (order.side === 'buy') {
          await this.alpaca.cancelOrder(order.id);
        }
      });

      // get movers
      this.positions = await this.alpaca.getPositions();
      const positionSymbols = this.positions.map(({ symbol }) => symbol);
      // const movers = await scrape(5);
      this.symbols = [...new Set([
        ...this.symbols,
        // ...movers,
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
    };

    start().then(() => {
      this.interval = setInterval(start, this.timeout);
    });
  }
}

const algo = new Algo();
algo.run();
