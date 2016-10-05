var exec = require('exec-sh')
var chalk = require('chalk')

module.exports = function () {
  var command = 'NODE_ENV=production $(npm bin)/babel src --out-dir build --presets es2015,stage-0'

  console.log(chalk.magenta('🚀  Building files from `src/` into `build/`'))
  exec(command, function (err) {
    if (err) process.exit(1)
  })
}
