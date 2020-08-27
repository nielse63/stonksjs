# @stonksjs/core

> Core library for stonksjs

## Installation

```bash
npm install --save @stonksjs/core
```

## Usage

```js
const StonksCollection = require('@stonksjs/core');

const collection = new StonksCollection('reit');

// get list of symbols from the collection
const symbols = await collection.getSymbols();

// get object of with fundamental data for each item in collection
const symbols = await collection.getQuotes();
```

## API

Full API docs can be found in the [`docs/`](./docs/api.md) folder
