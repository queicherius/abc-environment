var exec = require('exec-sh')
var chalk = require('chalk')

module.exports = function () {
  var command = 'NODE_ENV=development $(npm bin)/snazzy {src,tests,.}/*.js --parser babel-eslint'

  console.log(chalk.magenta('🚀  Running lint'))
  exec(command, function (err) {
    if (err) process.exit(1)
    console.log(chalk.bold.green('✓ Code looks good!'))
  })
}
