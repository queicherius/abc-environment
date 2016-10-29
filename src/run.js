var log = require('./helpers/log.js')
var bin = require('./helpers/bin.js')
var exec = require('./helpers/exec.js')

module.exports = function (file) {
  var command = 'NODE_ENV=development ' + bin('babel-node') + ' ' + file

  log.info('Running file `' + file + '`')
  exec(command)
}
