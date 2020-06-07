module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: ['jest'],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': ['warn', { ignoreComments: true }],
    'import/order': ['warn', {
      groups: [
        'builtin',
        'external',
        'internal',
        'unknown',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: './config/**',
          group: 'builtin',
          position: 'before',
        },
      ],
    }],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'global-require': 'off',
      },
    },
    {
      files: ['bin/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
