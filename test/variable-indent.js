"use strict"

var test = require('tape')
var Indent = require('../')

var fs = require('fs')

test('can update indent while stream runnning each line of a stream', function(t) {
  var stream = Indent()
  var expected = fs.readFileSync(__dirname + '/variable-indent-expected.txt', 'utf8')
  var actual = ''
  var indent = Indent('  ')
  fs.createReadStream(__dirname + '/indent.txt')
  .pipe(indent)
  .on('data', function(data) {
    actual += data
    indent.indent += '  '
  })
  .on('end', function() {
    t.equal(actual, expected)
    t.end()
  })
})

