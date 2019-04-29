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

    /**
     * disallow use of undeclared variables
     * @see http://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * disallow initializing to undefined
     * @see http://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'error',

    /**
     * disallow use of undefined variable
     * @see http://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': 'off',
  },
}
