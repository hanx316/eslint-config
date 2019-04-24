'use strict'

const path = require('path')
const coffee = require('coffee')

describe('test/variables.test.js', () => {
  const cwd = path.join(__dirname, 'cases/variables')

  describe('no-unused-vars', () => {
    it('should fail in unused variable case', () => {
      return coffee.spawn('eslint', ['no-unused-vars-fail.js'], { cwd })
        .expect('code', 1)
        .end()
    })

    it('should fail in unused arguments after the last used argument', () => {
      return coffee.spawn('eslint', ['no-unused-vars-argument-fail.js'], { cwd })
        .expect('code', 1)
        .end()
    })

    it('should success in correct variable case', () => {
      return coffee.spawn('eslint', ['no-unused-vars.js'], { cwd })
        .expect('code', 0)
        .end()
    })

    it('should success in correct argument case', () => {
      return coffee.spawn('eslint', ['no-unused-vars-argument.js'], { cwd })
        .expect('code', 0)
        .end()
    })
  })
})
