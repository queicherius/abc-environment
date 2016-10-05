var log = require('./helpers/log.js')
var exec = require('exec-sh')

module.exports = function (file) {
  var command = 'NODE_ENV=development $(npm bin)/babel-node ' + file

  log.info('Running file `' + file + '`')
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
