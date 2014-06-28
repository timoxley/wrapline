"use strict"

var through = require('through2')
var pipe = require('multipipe')
var split = require('split2')

module.exports = function(indent) {
  var context = pipe(
    split(),
    through(function(data, enc, cb) {
      // add newline that split() removed
      this.push(context.indent + data + '\n')
      cb()
    })
  )
  context.indent = indent
  return context
}
