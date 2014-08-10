"use strict"

var test = require('tape')
var wrapline = require('../')

var fs = require('fs')

test('adds suffix to each line of a stream', function(t) {
  var expected = fs.readFileSync(__dirname + '/suffix-expected.txt', 'utf8')
  var actual = ''
  fs.createReadStream(__dirname + '/indent.txt')
  .pipe(wrapline('<','>'))
  .on('data', function(data) {
    actual += data
  })
  .on('end', function() {
    t.equal(actual, expected)
    t.end()
  })
})
