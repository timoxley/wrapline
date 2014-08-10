"use strict"

var test = require('tape')
var wrapline = require('../')

var fs = require('fs')

test('can still update indent while stream runnning each line of a stream', function(t) {
  var expected = fs.readFileSync(__dirname + '/variable-indent2-expected.txt', 'utf8')
  var actual = ''

  fs.createReadStream(__dirname + '/indent.txt')
  .pipe(wrapline(' '))
  .pipe(wrapline(function(pre, line) {
    pre = pre || 0
    return pre + 1
  }))
  .on('data', function(data) {
    actual += data
  })
  .on('end', function() {
    t.equal(actual, expected)
    t.end()
  })
})


