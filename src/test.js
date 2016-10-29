var log = require('./helpers/log.js')
var bin = require('./helpers/bin.js')
var root = require('./helpers/root.js')
var exec = require('./helpers/exec.js')

module.exports = function () {
  var nyc = bin('nyc') + ' --include="' + root + 'src/" --sourceMap=false --instrument=false --all=true --reporter=lcov --reporter=text-summary --report-dir=' + root + 'coverage/'
  var mocha = bin('mocha') + ' --compilers js:babel-core/register --require babel-polyfill ' + root + 'tests/*'
  var command = 'NODE_ENV=test ' + nyc + ' ' + mocha

  log.info('Running tests in `tests/`')
  exec(command, function (err) {
    log.info('Tests finished. Check your coverage via coverage/lcov-report/index.html')
    if (err) process.exit(1)
  })
}
