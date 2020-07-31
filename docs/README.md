# stonksjs

> Algotrading utility scripts. To the moon!!! 🚀🚀🚀

![CI Tests](https://github.com/nielse63/stonksjs/workflows/CI%20Tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/stonksjs/badge.svg?branch=master)](https://coveralls.io/github/nielse63/stonksjs?branch=master)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Roadmap](#roadmap)

## Features

Stonks is a collection of helpful tools to make stock searches and algotrading easier. The goal is
for stonks to be everything but the backtesting. With stonks you can:

- Buy and sell on Robinhood with node
- Custom finviz screener
- Diverse scrapers, pulling symbols from Robinhood, finviz, and Dividend Value Builder

## Installation

```bash
npm install stonksjs
```

or

```bash
yarn add stonksjs
```

## Usage

> More in-depth examples can be found in the [`example/`](example/) directory

Import the module in your script or project, and execute one of the functions available:

```js
const stonks = require('stonksjs');

// stonks is a plan object, with each submodule containing the functions
const { screeners, scrapers } = stonks;

// all functions are promise based
const symbols = await screeners.swingTrendingUp();

// trade on Robinhood by saving your credentials as environment variables
const { Robinhood } = stonks;
const robinhood = new Robinhood(username, password, deviceToken);
const order = await robinhood.buy('MSFT', {
  qty: 100,
  type: 'limit',
  price: 123.45,
});
```

More examples and API docs can be found in [`docs/api`](docs/api).

### Environment Variables

The `Robinhood` class required the `username`, `password`, and `deviceToken` and will default to
environment variables is undefined. See [`.env.sample`](.env.sample) for all the environment
variables that should be defined.

For instructions on how to get the device token value,
[read this GitHub comment](https://github.com/robinhood-unofficial/pyrh/issues/176#issuecomment-487310801).

## API

Full API docs and examples can be found in [`docs/api`](docs/api).

## Development

```bash
git clone http://github.com/nielse63/stonksjs.git
cd stonksjs
npm ci
```

Lint and run the full test suite before pushing or opening a PR.

### Releases

To release a new version, run:

```bash
npm run release
```

## Roadmap

See [`docs/roadmap.md`](docs/roadmap.md) for upcoming features, or
[open an issue on GitHub](https://github.com/nielse63/stonksjs/issues).
