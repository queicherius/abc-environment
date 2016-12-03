var log = require('./helpers/log.js')
var bin = require('./helpers/bin.js')
var root = require('./helpers/root.js')
var exec = require('./helpers/exec.js')

module.exports = function () {
  var command = bin('cross-env') + ' NODE_ENV=development ' + bin('standard') + ' ' + root + '{src,tests,.}/**/*.js --parser babel-eslint | ' + bin('snazzy')

  log.info('Running lint')
  exec(command, function (err) {
    if (err) process.exit(1)
    log.success('Code looks good!')
  })
}
