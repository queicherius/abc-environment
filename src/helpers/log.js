var chalk = require('chalk')

module.exports = {
  info: (string) => console.log(chalk.magenta('🚀  ' + string)),
  warning: (string) => console.log(chalk.yellow('⚠️  ' + string)),
  error: (string) => console.log(chalk.red('⛔️  ' + string)),
  success: (string) => console.log(chalk.green('✓ ' + string))
}
