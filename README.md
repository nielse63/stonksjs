# stonksjs

> Algotrading tools in node

## Requirements

- [Alpaca](https://alpaca.markets/docs/get-started-with-alpaca/) trading account

## Installation

```bash
git clone https://github.com/nielse63/stonksjs.git
cd stonksjs
npm ci
```

## Usage

Create a `.env` based on [`.env.sample`]('.env.sample), then run:

```bash
npm start
```

## Features/Design

- Executes on the command line on a remote server or your local machine
- Creates a stock universe based on pre-set parameters instead of opinions, emotions, or the latest
  trends
- Automatically backtests strategies before execution - if it's not a winner, don't invest
