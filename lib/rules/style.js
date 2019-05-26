'use strict'

const os = require('os')

module.exports = {
  rules: {
    /**
     * Disallow certain syntax forms
     * @see http://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': [ 'error', 'WithStatement' ],

    /**
     * Require global strict mode
     * @see https://cn.eslint.org/docs/rules/strict
     */
    strict: ['error', 'global'],

    // ********** 换行 **********
    /**
     * Enforces the usage of Unix line endings: \n for LF
     * @see http://eslint.org/docs/rules/linebreak-style
     */
    'linebreak-style': [ (os.platform() === 'win32' ? 'off' : 'error'), 'unix' ],

    /**
     * Enforce newline at the end of file, with no multiple empty lines
     * @see http://eslint.org/docs/rules/eol-last
     */
    'eol-last': 'error',

    /**
     * Disallow multiple empty lines and only one newline at the end
     * @see http://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 1 }],

    // ********** 缩进 **********
    /**
     * This option sets a specific tab width for your code
     * @see http://eslint.org/docs/rules/indent
     */
    indent: [ 'error', 2, { SwitchCase: 1, VariableDeclarator: 'first' }],

    // ********** 空格 **********
    /**
     * Disallow trailing whitespace at the end of lines
     * @see http://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': 'error',

    /**
     * Require space before blocks
     * @see http://eslint.org/docs/rules/space-before-blocks
     */
    'space-before-blocks': [ 'error', 'always' ],

    /**
     * Enforce spaces inside of single line blocks
     * @see http://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': [ 'error', 'always' ],

    /**
     * Require a space before & after certain keywords
     * @see http://eslint.org/docs/rules/keyword-spacing
     */
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    /**
     * Disallow spaces inside parentheses
     * @see http://eslint.org/docs/rules/space-in-parens
     */
    'space-in-parens': [ 'error', 'never' ],

    /**
     * require spaces around operators
     * @see http://eslint.org/docs/rules/space-infix-ops
     */
    'space-infix-ops': 'error',

    /**
     * Require spaces before/after unary operators
     * @see http://eslint.org/docs/rules/space-unary-ops
     */
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
    }],

    /**
     * Disallow space between function identifier and application
     * @see http://eslint.org/docs/
     */
    'no-spaced-func': 'error',

    /**
     * Require or disallow space before function opening parenthesis
     * @see http://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    /**
     * Enforce spacing before and after comma
     * @see http://eslint.org/docs/rules/comma-spacing
     */
    'comma-spacing': [ 'error', { before: false, after: true }],

    /**
     * Enforces spacing between keys and values in object literal properties
     * @see http://eslint.org/docs/rules/key-spacing
     */
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true }],

    /**
     * Require padding inside curly braces
     * @see http://eslint.org/docs/rules/object-curly-spacing
     *
     * ```js
     * // incorrect
     * var obj = {'foo': 'bar'};
     * var obj = {'foo': 'bar' };
     * var obj = { baz: {'foo': 'qux'}, bar};
     * var obj = {baz: { 'foo': 'qux' }, bar};
     * var obj = {'foo': 'bar'
     * };
     * ```
     */
    'object-curly-spacing': [ 'error', 'always' ],

    /**
     * disallow whitespace before properties
     * @see http://eslint.org/docs/rules/no-whitespace-before-property
     */
    'no-whitespace-before-property': 'error',

    /**
     * require or disallow a space immediately following the // or /* in a comment
     * @see http://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': ['error', 'always', {
      line: { markers: ['*package', '!', '/', ',', '='] },
      block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] },
    }],

    /**
     * Disallow mixed spaces and tabs for indentation
     * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],

    // ********** 分号 **********
    /**
     * Disallow use of semicolons instead of ASI
     * @see http://eslint.org/docs/rules/semi
     */
    semi: [ 'error', 'never' ],

    // ********** 逗号 **********
    /**
     * Enforce one true comma style
     * @see http://eslint.org/docs/rules/comma-style
     */
    'comma-style': [ 'error', 'last' ],

    /**
     * Require trailing commas (only multiline)
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    // ********** 引号 **********
    /**
     * Single quotes should be used
     * @see http://eslint.org/docs/rules/quotes
     */
    quotes: [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // ********** 命名 **********
    /**
     * Require camel case names but properties omitted
     * @see http://eslint.org/docs/rules/camelcase
     */
    camelcase: [ 'error', { properties: 'never' } ],

    /**
     * Not require a capital letter for constructors
     * @see http://eslint.org/docs/rules/new-cap
     */
    'new-cap': 'off',

    // ********** 其他 **********
    /**
     * Disallow the omission of parentheses when invoking a constructor with no arguments
     * @see http://eslint.org/docs/rules/new-parens
     */
    'new-parens': 'error',

    /**
     * Disallow negating the left operand in `in` expressions
     * @see http://eslint.org/docs/rules/no-negated-in-lhs
     */
    'no-negated-in-lhs': 'error',

    /**
     * allow the use of Boolean literals in conditional expressions
     * also, prefer `a || b` over `a ? a : b`
     * @see http://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    /**
     * Disallow unnecessary escape usage
     * @see http://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',
  },
}
