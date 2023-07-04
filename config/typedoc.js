const path = require('path');
const fs = require('fs');

const getEntryPoints = () => {
  const packagesDir = path.resolve(__dirname, '../packages');
  const packages = fs.readdirSync(packagesDir);
  const entryPoints = packages.map((directory) => {
    return path.join(packagesDir, directory);
  });
  return entryPoints;
};

module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  basePath: '../',
  entryPoints: getEntryPoints(),
  entryPointStrategy: 'packages',
  exclude: ['**/__tests__/**', '**/__mocks__/**', '**/__fixtures__/**'],
  cleanOutputDir: true,
  excludePrivate: false,
  excludeInternal: false,
  excludeProtected: false,
  includeVersion: true,
  gitRevision: 'main',
  plugin: ['typedoc-plugin-markdown'],
};
