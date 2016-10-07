var chalk = require('chalk')

module.exports = {
  info: (string) => console.log(chalk.blue('⏳  ' + string)),
  error: (string) => console.log(chalk.red('⛔️  ' + string)),
  success: (string) => console.log(chalk.green('👍  ' + string))
}
