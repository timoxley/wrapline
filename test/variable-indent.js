"use strict"

var test = require('tape')
var wrapline = require('../')

var fs = require('fs')

test('can update indent while stream runnning each line of a stream', function(t) {
  var expected = fs.readFileSync(__dirname + '/variable-indent-expected.txt', 'utf8')
  var actual = ''
  var indent = wrapline(function(pre) {
    return pre += '  '
  })
  fs.createReadStream(__dirname + '/indent.txt')
  .pipe(indent)
  .on('data', function(data) {
    actual += data
  })
  .on('end', function() {
    t.equal(actual, expected)
    t.end()
  })
})

