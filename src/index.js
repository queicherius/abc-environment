#!/usr/bin/env node
var argv = process.argv.splice(2)
var log = require('./helpers/log.js')
var whitelist = ['build', 'run', 'test', 'lint', 'setup']

if (argv.length === 0 || argv[0] === 'help') {
  console.log('abc [command]')
  console.log('')
  console.log('Commands:')
  console.log('  setup            Creates the directories and files for the whole project to run.')
  console.log('  build            Compiles the source files from src/ into a build/ directory.')
  console.log('  test             Runs the test files in the tests/ directory.')
  console.log('  lint             Checks if your code is consistent and follows best practices.')
  console.log('  run src/file.js  Runs a specified file.')
  console.log('  help             This help page you are looking at!')
  process.exit(0)
}

if (whitelist.indexOf(argv[0]) === -1) {
  log.error('Command `' + argv[0] + '` does not exist')
  process.exit(1)
}

var callback = require('./' + argv[0] + '.js')
callback.apply(null, argv.splice(1))
