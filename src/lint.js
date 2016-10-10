var log = require('./helpers/log.js')
var exec = require('exec-sh')

module.exports = function () {
  var command = 'NODE_ENV=development $(npm bin)/snazzy {src,tests,.}/**/*.js --parser babel-eslint'

  log.info('Running lint')
  exec(command, function (err) {
    if (err) process.exit(1)
    log.success('Code looks good!')
  })
}
