# `@stonksjs/api`

> Utility classes for fetching data and responding in a standardized format

## Installation

```bash
npm install --save @stonksjs/api
```

## Usage

```js
const { StonksAPI } = require('@stonksjs/api');

const api = new StonksAPI({
  // config object passed to axios
});
const data = await api.get('https://some-url.com/api/data');
```

## API

Full API docs can be found in the [`docs/`](./docs/api.md) folder
