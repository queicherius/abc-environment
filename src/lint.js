var log = require('./helpers/log.js')
var bin = require('./helpers/bin.js')
var root = require('./helpers/root.js')
var exec = require('./helpers/exec.js')

module.exports = function (fixFlag) {
  fixFlag = fixFlag === '--fix'
  var command = bin('standard') + (fixFlag ? ' --fix' : '') + ' ' +
    root + '{src,tests,.}/**/*.js --parser babel-eslint | ' + bin('snazzy')

  log.info('Running lint' + (fixFlag ? ' --fix' : ''))
  exec(command, function (err) {
    if (fixFlag) {
      log.info('Fixed all issues that we could!')
    }

    if (err) process.exit(1)
    log.success('Code looks good!')
  })
}
