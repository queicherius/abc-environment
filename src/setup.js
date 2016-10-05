var exec = require('exec-sh')
var chalk = require('chalk')
var fs = require('fs')
var mkdirp = require('mkdirp')

var travisFile = `language: node_js
node_js:
  - "6"
after_script: "$(npm bin)/codecov"
branches:
  only:
    - master`

var ignoreFile = `# Logs
npm-debug.log*

# Coverage directories
coverage/
.nyc_output/

# Compiled code
build/

# Dependencies
node_modules/

# Optional npm cache directory
.npm/

# Webflow
.idea/

# Operating System
.DS_Store`

module.exports = function () {
  console.log(chalk.magenta('🚀  Running setup'))

  mkdirp.sync('./src')
  mkdirp.sync('./tests')
  console.log(chalk.magenta('🚀  Created `src/` and `tests/` directories'))

  fs.writeFileSync('.travis.yml', travisFile, 'utf-8')
  console.log(chalk.magenta('🚀  Created `.travis.yml`'))

  fs.writeFileSync('.gitignore', ignoreFile, 'utf-8')
  fs.writeFileSync('.npmignore', ignoreFile.replace(/build\//, 'src/').replace('# Compiled code', '# Source code'), 'utf-8')
  console.log(chalk.magenta('🚀  Created `.gitignore` & `.npmignore`'))

  fs.writeFileSync('.babelrc', `{
 "presets": ["es2015", "stage-0"],
 "env": {"test": {"plugins": ["istanbul", "rewire"]}}
}`, 'utf-8')
  console.log(chalk.magenta('🚀  Created `.babelrc`'))

  // TODO instead, write a single file that moves the command to the internal thing
  // var packageJson = fs.readFileSync('package.json', 'utf-8')
  // packageJson = JSON.parse(packageJson)
  //
  // packageJson.scripts = packageJson.scripts || {}
  // packageJson.scripts['prepublish'] = 'sfc build'
  // packageJson.scripts['build'] = 'sfc build'
  // packageJson.scripts['test'] = 'sfc test && sfc lint'
  // packageJson.scripts['exec'] = 'sfc run'
  //
  // fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8')
  // console.log(chalk.magenta('🚀  Updated `package.json`'))

  console.log(chalk.magenta('🚀  Done! It\'s your turn to diff & commit now!'))
}
