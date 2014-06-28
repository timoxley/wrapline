"use strict"

var test = require('tape')
var Indent = require('../')

var fs = require('fs')

test('adds indent to each line of a stream', function(t) {
  var expected = fs.readFileSync(__dirname + '/indent-expected.txt', 'utf8')
  var actual = ''
  fs.createReadStream(__dirname + '/indent.txt')
  .pipe(Indent('  '))
  .on('data', function(data) {
    actual += data
  })
  .on('end', function() {
    t.equal(actual, expected)
    t.end()
  })
})
