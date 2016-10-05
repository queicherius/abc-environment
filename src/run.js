var exec = require('exec-sh')
var chalk = require('chalk')

module.exports = function (file) {
  var command = 'NODE_ENV=development $(npm bin)/babel-node --presets es2015,stage-0 ' + file

  console.log(chalk.magenta('🚀  Running file `' + file + '`'))
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
