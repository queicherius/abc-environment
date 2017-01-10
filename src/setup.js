var log = require('./helpers/log.js')
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')

var templates = {
  travis: fs.readFileSync(path.join(__dirname, 'templates/travis.yml'), 'utf-8'),
  gitignore: fs.readFileSync(path.join(__dirname, 'templates/gitignore'), 'utf-8'),
  babelrc: fs.readFileSync(path.join(__dirname, 'templates/babelrc'), 'utf-8'),
  srcDemo: fs.readFileSync(path.join(__dirname, 'templates/src-index.js'), 'utf-8'),
  testsDemo: fs.readFileSync(path.join(__dirname, 'templates/tests-index.spec.js'), 'utf-8')
}

module.exports = function () {
  log.info('Running setup')

  // Check if the package.json exists
  try {
    fs.accessSync('package.json', fs.F_OK)
  } catch (err) {
    log.error('`package.json` not found. Please run `npm init` first.')
    return
  }

  // Check if we are in the dependencies
  var packageJson = fs.readFileSync('package.json', 'utf-8')
  packageJson = JSON.parse(packageJson)
  if (Object.keys(packageJson.devDependencies || []).indexOf('abc-environment') === -1) {
    log.error('`abc-environment` not found in `package.json` devDependencies.')
    return
  }

  // Make sure the directories exist
  mkdirp.sync('./src')
  mkdirp.sync('./tests')
  log.info('Created `src/` and `tests/` directories')

  // Create some demo files if the directories are empty
  if (fs.readdirSync('./src').length === 0 && fs.readdirSync('./tests').length === 0) {
    fs.writeFileSync('src/index.js', templates.srcDemo, 'utf-8')
    fs.writeFileSync('tests/index.spec.js', templates.testsDemo, 'utf-8')
    log.info('Empty project, created demo module files')
  }

  // Create travis.yml
  fs.writeFileSync('.travis.yml', templates.travis, 'utf-8')
  log.info('Created `.travis.yml`')

  // Create .gitignore & .npmignore
  fs.writeFileSync('.gitignore', templates.gitignore, 'utf-8')
  fs.writeFileSync('.npmignore', templates.gitignore.replace(/build\//, 'src/').replace('# Compiled code', '# Source code'), 'utf-8')
  log.info('Created `.gitignore` & `.npmignore`')

  // Create .babelrc
  fs.writeFileSync('.babelrc', templates.babelrc, 'utf-8')
  log.info('Created `.babelrc`')

  // Write npm script into package.json
  packageJson.scripts = packageJson.scripts || {}
  packageJson.scripts['test'] = 'abc test && abc lint'
  packageJson.scripts['build'] = 'abc build'
  packageJson.scripts['version'] = 'abc build'
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n', 'utf-8')
  log.info('Updated `package.json` scripts')

  log.success('Done! It\'s your turn to diff & commit now!')
}
