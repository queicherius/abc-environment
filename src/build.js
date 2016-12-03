var log = require('./helpers/log.js')
var bin = require('./helpers/bin.js')
var root = require('./helpers/root.js')
var exec = require('./helpers/exec.js')

module.exports = function () {
  var command = 'rm -rf ' + root + 'build/ && ' +
    bin('cross-env') + ' NODE_ENV=production ' + bin('babel') + ' ' + root + 'src/ --out-dir ' + root + 'build/'

  log.info('Building files from `src/` into `build/`')
  exec(command, function (err) {
    if (err) process.exit(1)
    log.success('Built files in `build/`')
  })
}
