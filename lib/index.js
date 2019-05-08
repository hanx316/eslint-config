'use strict'

module.exports = {
  extends: [
    './rules/variables',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {},
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'script',
  },
}
