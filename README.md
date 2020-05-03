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

### Backtesting

Strategies are backtested on [TradingView](https://www.tradingview.com/chart/APPS/DDEbDFFu-EMA-Crossover-Backtest/).

## Roadmap/To-Dos

A features and issues can be added and tracked on the [Projects](https://github.com/nielse63/stonks/projects) pages of this repo.

## Releases

```bash
# commit changes
git commit -am '...'

# generate changelog
npx auto-changelog
git add CHANGELOG.md
git commit -m 'chore: Updated changelog'
git push

# follow prompts to release on npm and github
npm run release

# update the version of stonksjs in the functions folder
cd functions
npm i -S stonkjs@latest

# deploy functions
cd ..
firebase deploy --only functions
```

## Resources/Links

- [Google Cloud scheduled jobs](https://console.cloud.google.com/cloudscheduler?project=stonks-1157d)
- [Firebase functions](https://console.firebase.google.com/u/0/project/stonks-1157d/functions/list)
