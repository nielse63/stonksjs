# stonksjs

> To the moon!!! 🚀🚀🚀

![CI Tests](https://github.com/nielse63/stonksjs/workflows/CI%20Tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/stonksjs/badge.svg?branch=master)](https://coveralls.io/github/nielse63/stonksjs?branch=master)

## BEWARE! WORK IN PROGRESS

This project is still work in progress and very, very subject to change. This is by no means
production ready, and shouldn't really be used by anyone but me right now.

## Installation

```bash
npm install stonksjs
```

or

```bash
yarn add stonksjs
```

## Usage

Import the module in your script or project, and execute one of the functions available:

```js
const stonks = require('stonksjs');

const { screeners, robinhood } = stonks;

// get equities trending up
const symbols = await screeners.swingTrendingUp();

// buy stock
const rh = await robinhood(username, password, deviceToken);
await rh.buy('MSFT', { qty: 100 });
```

### Environment Variables

The easiest way to use the Robinhood functions is to set your username, password, and device token
as environment variables, instead of passing them as arguments to the function. For instructions on
how to get the device token value,
[read this GitHub comment](https://github.com/robinhood-unofficial/pyrh/issues/176#issuecomment-487310801).
Add the following to your `.env` file:

```
ROBINHOOD_USERNAME='xxxxxxxxx'
ROBINHOOD_PASSWORD='xxxxxxxxx'
ROBINHOOD_DEVICE_TOKEN='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

Again, still work in progress. So there isn't any usage.
