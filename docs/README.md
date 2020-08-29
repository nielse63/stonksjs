![stonksjs](https://raw.githubusercontent.com/nielse63/stonksjs/gh-pages/img/banner.svg)

# stonksjs

> Reliable algotrading utilities written in node

![CI Tests](https://github.com/nielse63/stonksjs/workflows/CI%20Tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/stonksjs/badge.svg?branch=master)](https://coveralls.io/github/nielse63/stonksjs?branch=master)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/nielse63/stonksjs?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- [Features](#features)
  - [Goals](#goals)
- [Usage](#usage)
  - [Packages](#packages)
- [Collaboration](#collaboration)
- [Development](#development)
  - [Setup](#setup)
  - [Testing](#testing)
  - [Release](#release)
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

### Packages

| Name                                                                                 | Description                                                               | Version                                                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [@stonksjs/core](https://github.com/nielse63/stonksjs/tree/master/packages/core)     | Core library for stonksjs                                                 | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/quote?color=brightgreen&style=flat-square)  |
| [@stonksjs/api](https://github.com/nielse63/stonksjs/tree/master/packages/api)       | Utility classes for fetching data and responding in a standardized format | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/api?color=brightgreen&style=flat-square)    |
| [@stonksjs/quote](https://github.com/nielse63/stonksjs/tree/master/packages/quote)   | Detailed financial data for any ticket symbol                             | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/quote?color=brightgreen&style=flat-square)  |
| [@stonksjs/finviz](https://github.com/nielse63/stonksjs/tree/master/packages/finviz) | Get the results from a custom finviz screener                             | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square) |

## Collaboration

Use the links below for feature requests, issues, or pull rquests:

- [New feature request](https://github.com/nielse63/stonksjs/issues/new?template=feature-request.md)
- [Defect/bug](https://github.com/nielse63/stonksjs/issues/new?template=bug.md)
- [Pull request](https://github.com/nielse63/stonksjs/compare)

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

## Roadmap

All new features and changes are being tracked in GitHub under the
[projects](https://github.com/nielse63/stonksjs/projects) and
[issues](https://github.com/nielse63/stonksjs/issues) tabs of this repo.
