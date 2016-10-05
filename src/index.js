#!/usr/bin/env node
var argv = process.argv.splice(2)
var chalk = require('chalk')
var whitelist = ['build', 'run', 'test', 'lint', 'setup']

if (whitelist.indexOf(argv[0]) === -1) {
  console.log(chalk.magenta('🚀  Command `' + argv[0] + '` does not exist'))
  process.exit(1)
}

var callback = require('./' + argv[0] + '.js')
callback.apply(null, argv.splice(1))
