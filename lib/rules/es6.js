'use strict'

module.exports = {
  rules: {
    /**
     * Allows the use of braces around arrow function body, even if they can be omitted
     * @see http://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': 'off',

    /**
     * Disallows the use of parens when they are no required
     * @see http://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': [ 'error', 'as-needed' ],

    /**
     * Require space before and after an arrow function's arrow(`=>`)
     * @see http://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': [ 'error', { before: true, after: true }],

    /**
     * It doesn't check whether or not there is a valid `super()` call
     * @see http://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'off',

    /**
     * This rule enforces spacing after the `*` of generator functions, but omitting before that
     * @see http://eslint.org/docs/rules/generator-star-spacing
     *
     * ```js
     * function* generator() {
     *   yield '44'
     *   yield '55'
     * }
     * ```
     */
    'generator-star-spacing': [ 'error', { before: false, after: true }],

    /**
     * Enforce spacing after the `*` in `yield*` expressions
     * @see http://eslint.org/docs/rules/yield-star-spacing
     */
    'yield-star-spacing': [ 'error', { before: false, after: true }],

    /**
     * This rule disallows modifying variables of class declarations
     * @see http://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow arrow functions where they could be confused with comparisons
     * @see http://eslint.org/docs/rules/no-confusing-arrow
     * @example
     *
     * ```js
     * var x = a => 1 ? 2 : 3; // incorrect
     * var x = a => (1 ? 2 : 3); // correct
     * ````
     */
    'no-confusing-arrow': [ 'error', {
      allowParens: true,
    }],

    /**
     * Disallow modifying variables that are declared using `const`
     * @see http://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallow duplicate name in class members
     * @see http://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow Symbol Constructor
     * @see http://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow use of this/super before calling super() in constructors
     * @see http://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow unnecessary computed property keys on objects
     * @see http://eslint.org/docs/rules/no-useless-computed-key
     *
     * ```js
     * foo = { ['a' + 'b']: 'foo' } // correct
     * foo = { ['a']: 'bar' }       // incorrect
     * ```
     */
    'no-useless-computed-key': 'error',

    /**
     * Disallow unnecessary constructor
     * @see http://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'error',

    /**
     * Not require Object Literal Shorthand Syntax
     * @see http://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': 'off',

    /**
     * Not prefer `const` for never reassigned variable
     * @see http://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'off',

    /**
     * This rule doesn't prefer using Reflect methods where applicable
     * @see http://eslint.org/docs/rules/prefer-reflect
     */
    'prefer-reflect': 'off',

    /**
     * This rule doesn't prefer using the rest parameters instead of `arguments`
     * @see http://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'off',

    /**
     * This rule doesn't prefer using the spread operator instead of `.apply()`
     * @see http://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'off',

    /**
     * Suggest using template syntax instead of string concat
     * @see http://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'off',

    /**
     * This rule doesn't require a valid `yield` in generator functions
     * @see http://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'off',

    /**
     * This rule disallows usage of spacing in template strings
     * @see http://eslint.org/docs/rules/template-curly-spacing
     *
     * ```js
     * // incorrect
     * `${ bar }`;
     * `hello, ${ people.name}!`;
     * `hello, ${people.name }!`;
     *
     * // correct
     * `${bar}`;
     * `hello, ${people.name}!`;
     *
     * // specially, this is correct
     * `${
     *   bar
     * }`;
     * ```
     */
    'template-curly-spacing': 'error',

    /**
     * Not require only passing instances of the built-in Error object to the reject() function
     * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'off',
  },
}
