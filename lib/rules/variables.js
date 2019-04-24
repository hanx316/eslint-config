'use strict'

module.exports = {
  rules: {
    /**
     * allow the use of var
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': 'off',

    /**
     * do not enforce variable initializations
     * @see https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * disallow declaration of variables that are not used in the code
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [ 'error', { vars: 'local', args: 'after-used' }],
  },
}
