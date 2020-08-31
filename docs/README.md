<img src="https://raw.githubusercontent.com/nielse63/stonksjs/master/docs/img/logo.svg" align="right" width="100" />

# stonksjs

> Reliable algotrading utilities written in node

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/nielse63/stonksjs?style=flat-square)
![CI Tests](https://github.com/nielse63/stonksjs/workflows/CI%20Tests/badge.svg)
![Coveralls github](https://img.shields.io/coveralls/github/nielse63/stonksjs?style=flat-square)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/nielse63/stonksjs?style=flat-square)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/nielse63/stonksjs?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- [Features](#features)
  - [Goals](#goals)
- [Usage](#usage)
- [Development](#development)
  - [Setup](#setup)
  - [Testing](#testing)
  - [Release](#release)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Features

- Custom screeners from finviz, msn, and finscreener
- Detailed ticket fundamentals
- Robinhood collection symbols
- And more features planned

### Goals

**What stonksjs is:**

The primary objective of this project are:

- To provide a collection of reliable algotrading utilities written in node
- Take some of the guess-work out of the stock research process by using industry-tested, predefined
  screeners
- Provide more data-points for a given instrument than other packages currently available
- Enable algotrading programmers with diversified assets - not just the hottest options rumors on
  [r/wallstreetbets](https://reddit.com/r/wallstreetbets)

**What stonksjs is not:**

- stonksjs **is not** roboadvisor or professional trading app - this is just a fun little side
  project for me
- stonksjs **is not** an unofficial API for Robinhood or any other brokerage. If that's what you're
  looking for, I'd recommend [algotrader](https://github.com/torreyleonard/algotrader)
- stonksjs currently **is not** a backtesting tool, although that might get added to the roadmap
  soon

## Usage

Installation, usage, and API docs can be found in each scoped package directory.

| Name                                                                                                               | Description                                                               | Version                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [@stonksjs/core](https://github.com/nielse63/stonksjs/tree/master/packages/core)                                   | Core library for stonksjs                                                 | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/core?color=brightgreen&style=flat-square)                  |
| [@stonksjs/api](https://github.com/nielse63/stonksjs/tree/master/packages/api)                                     | Utility classes for fetching data and responding in a standardized format | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/api?color=brightgreen&style=flat-square)                   |
| [@stonksjs/quote](https://github.com/nielse63/stonksjs/tree/master/packages/quote)                                 | Detailed financial data for any ticket symbol                             | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/quote?color=brightgreen&style=flat-square)                 |
| [@stonksjs/finviz](https://github.com/nielse63/stonksjs/tree/master/packages/finviz)                               | Stock screener and company data from finviz                               | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)                |
| [@stonksjs/stock-screener](https://github.com/nielse63/stonksjs/tree/master/packages/stock-screener)               | Pre-defined industry standard stock screeners from MSN Money              | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square)        |
| [@stonksjs/robinhood-collections](https://github.com/nielse63/stonksjs/tree/master/packages/robinhood-collections) | Get the stock symbols for any Robinhood collection                        | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/robinhood-collections?color=brightgreen&style=flat-square) |

## Development

### Setup

Clone the repo and install the dependencies:

```bash
git clone http://github.com/nielse63/stonksjs.git
cd stonksjs
npm ci
```

Because stonksjs is a monorepo using [`lerna`](https://github.com/lerna/lerna), a `postinstall`
script will run `lerna bootstrap` to install all package dependencies. Once this is complete you're
ready to make your changes.

### Testing

Tests are run using `jest`, and can be run by executing:

```bash
npm test

# run with coverage
npm test -- --coverage
```

The full test suite is also execute whenever a branch is pushed and as a required pull request
check.

### Release

To release a new version, run:

```bash
npm run release
```

This executes `lerna publish` behind the scenes, and you'll be prompted with a few questions before
the package is deployed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would
like to change.

Please make sure to update tests as appropriate.

## Roadmap

All new features and changes are being tracked in GitHub under the
[projects](https://github.com/nielse63/stonksjs/projects) and
[issues](https://github.com/nielse63/stonksjs/issues) tabs of this repo.
