var debug = require('debug')('abc')
var exec = require('exec-sh')

module.exports = function (command, callback) {
  debug(command)
  exec(command, callback)
}
