module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'jest-extended',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest-extended/all',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 'warn',
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'valid-jsdoc': 'warn',
    'operator-linebreak': ['warn', 'before'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts'],
      rules: {
        'no-console': 'warn',
        'no-new': 'off',
      },
    },
    {
      files: ['.bin/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
