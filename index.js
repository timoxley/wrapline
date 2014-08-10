"use strict"

var through = require('through2')
var duplex = require('duplexer2')
var split = require('split2')

module.exports = function wrapLine(prefix, suffix) {
  var pre = ''
  var post = ''
  var input = split()
  var output = through(function(data, enc, cb) {

    pre = (typeof prefix === 'function')
    ? prefix(pre, data)
    : prefix

    post = (typeof suffix === 'function')
    ? suffix(post, data)
    : suffix

    if (pre == null) pre = ''
    if (post == null) post = ''

    this.push(pre + data + post + '\n')
    cb()
  })

  input.pipe(output)
  return duplex(input, output)
}
