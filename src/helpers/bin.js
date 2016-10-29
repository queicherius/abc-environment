// Find a binaries' path, since it may install in different directories
var path = require('path')
var fs = require('fs')
var log = require('./log.js')
var root = require('./root.js')

var possiblePaths = [
  // yarn
  path.join(root, 'node_modules/abc-environment/node_modules/.bin/'),

  // npm v3
  path.join(root, 'node_modules/.bin/')
]

function bin (binName) {
  // Check if the binary exists at one of the paths
  var binaryPaths = possiblePaths
    .map(p => path.join(p + binName))
    .filter(fileExists)

  // Exit out if we didn't find any path
  if (binaryPaths.length === 0) {
    log.error('No path for binary `' + binName + '` found. Did you run `npm install`?')
    process.exit(1)
  }

  // Return the first path (highest priority)
  return binaryPaths[0]
}

function fileExists (path) {
  try {
    fs.accessSync(path, fs.F_OK)
    return true
  } catch (e) {
    return false
  }
}

module.exports = bin
