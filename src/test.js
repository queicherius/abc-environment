var log = require('./helpers/log.js')
var exec = require('exec-sh')

module.exports = function () {
  var nyc = '$(npm bin)/nyc --include="src/" --sourceMap=false --instrument=false --all=true --reporter=lcov --reporter=text-summary --report-dir=coverage/'
  var mocha = '$(npm bin)/mocha --compilers js:babel-core/register --require babel-polyfill tests/*'
  var command = 'NODE_ENV=test ' + nyc + ' ' + mocha

  log.info('Running tests in `tests/`')
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
