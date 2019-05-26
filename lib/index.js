'use strict'

module.exports = {
  extends: [
    './rules/variables',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {},
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'script',
  },
}
