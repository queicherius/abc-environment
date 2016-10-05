var exec = require('exec-sh')
var chalk = require('chalk')

// TODO remove test directory
// TODO include all files in src for coverage
// TODO without babelrc or package shit?
// "nyc": {
//   "include": ["src/"],
//     "sourceMap": false,
//     "instrument": false
// },

module.exports = function () {
  var nyc = '$(npm bin)/nyc --all --exclude tests/ --sourceMap false --instrument false --reporter=lcov --reporter=text-summary --report-dir=coverage/'
  var mocha = '$(npm bin)/mocha --compilers js:babel-core/register --require babel-polyfill tests/*'
  var command = 'NODE_ENV=test ' + nyc + ' ' + mocha

  console.log(chalk.magenta('🚀  Running tests in `tests/`'))
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
