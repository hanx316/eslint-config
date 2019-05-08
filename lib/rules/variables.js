'use strict'

module.exports = {
  rules: {
    /**
     * Allow the use of var
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': 'off',

    /**
     * Not enforce variable initializations
     * @see https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * Disallow declaration of variables that are not used in the code
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [ 'error', { vars: 'local', args: 'after-used' }],

    /**
     * Disallow use of undeclared variables
     * @see http://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * Disallow initializing to undefined
     * @see http://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'error',

    /**
     * Disallow use of undefined
     * @see http://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': 'error',
  },
}
