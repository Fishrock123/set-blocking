/* global describe, should */

var exec = require('child_process').exec
var setBlocking = require('../')

require('chai').should()

describe('setBlocking', function () {
  // see: https://github.com/yargs/yargs/issues/497
  it('does not truncate text printed to stdout when process.exit() is called', function (done) {
    exec('./test/fixtures/yargs-497-stdout.js', function (err, stdout, stderr) {
      if (err) return done(err)
      stdout.should.match(/line 2999/)
      return done()
    })
  })

  it('does not truncate text printed to stderr when process.exit() is called', function (done) {
    exec('./test/fixtures/yargs-497-stderr.js', function (err, stdout, stderr) {
      stderr.should.match(/line 2999/)
      return done()
    })
  })
})
