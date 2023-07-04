# @stonksjs/finviz

> Unofficial finviz API

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Features

- Get detailed company financial data
- Use the URL from a custom finviz screener fetch the results in node

## Installation

```bash
npm install --save @stonksjs/finviz
```

## Usage

```js
import finviz from '@stonksjs/finviz';

// get company financial data
const data = await finviz.quote('MSFT');

// get results from a custom finviz screener
const symbols = await finviz.screener(
  'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
);
```

## API

Full API docs can be found at [`docs/modules`](./docs/modules.md)
