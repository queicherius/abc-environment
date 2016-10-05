#!/usr/bin/env node
var argv = process.argv.splice(2)
var log = require('./helpers/log.js')
var whitelist = ['build', 'run', 'test', 'lint', 'setup']

if (whitelist.indexOf(argv[0]) === -1) {
  log.error('Command `' + argv[0] + '` does not exist')
  process.exit(1)
}

var callback = require('./' + argv[0] + '.js')
callback.apply(null, argv.splice(1))
