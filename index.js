'use strict'

const builtin = [
  './lib/index',
].map(require.resolve)

module.exports = {
  extends: builtin,
}
