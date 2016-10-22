var log = require('./helpers/log.js')
var exec = require('exec-sh')

module.exports = function () {
  var command = 'rm -rf build/ && NODE_ENV=production $(npm bin)/babel src/ --out-dir build/'

  log.info('Building files from `src/` into `build/`')
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
