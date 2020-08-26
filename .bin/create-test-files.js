#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const globby = require('globby');

const createTestFiles = async () => {
  const files = await globby(['packages/core/lib/*.js', '!node_modules']);
  files.map((file) => {
    const src = path.resolve(__dirname, '..', file);
    const test = path.resolve(__dirname, '..', file)
      .replace('core/lib/', 'core/lib/__tests__/')
      .replace('.js', '.spec.js');
    return { src, test };
  })
    .filter(({ test }) => !fs.existsSync(test))
    .forEach(({ src, test }) => {
      const basename = path.basename(src).replace('.js', '');
      const content = `const ${basename} = require('../${basename}');

describe('${basename}', () => {
  let instance;
  beforeEach(() => {
    instance = new ${basename}();
  });

  it('should return a ${basename} instance', () => {
    expect(instance).toBeInstanceOf(${basename});
  });
});
`;
      fs.writeFileSync(test, content);
    });
  return Promise.resolve();
};

try {
  createTestFiles();
} catch (error) {
  console.error(error);
}
