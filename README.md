# abc-environment

> Get started with modern JavaScript development as simple as the ABC

## Features

- Next generation JavaScript language syntax
- Unit tests with code coverage of your original code
- Linting for consistent style
- Continuous integration

## Install

> This module only works with Node v6+ and npm v3+, which are the current LTS versions. Please make sure you are running the right versions via `node -v && npm -v` and update if needed.

```bash
# Install the module
npm install abc-environment

# Run the setup
node_modules/.bin/abc setup

# Now you can commit...
git add ...
git commit ...

# ...and run commands directly
./abc test
npm test
```

## Commands

### abc setup

**Creates the directories and files for the whole project to run.** This will modify files, so only run it on empty or version-controlled projects.

⚠️ When updating this module to the next higher major version number, make sure to run the `setup` command again to get the newest files!

The created directories and files are:

- `src/` - Directory for your source code
- `src/index.js` - Demo module file (if `src/` is empty)
- `tests/` - Directory for your tests
- `tests/index.spec.js` - Demo test file (if `tests/` is empty)
- `.babelrc` - Manages the Babel configuration throughout the whole project
- `.gitignore` - Makes sure that you don't commit dependency files into version control
- `.npmignore` - Makes sure that you only release the built files into npm
- `.travis.yml` - Handles continuous integration with [Travis](https://travis-ci.org/)
- `abc` - CLI script for easily running commands
- `package.json` - Adds three npm scripts:
  - `npm test` - Runs the `test` and `lint` commands
  - `npm run build` - Runs the `build` command
  - `npm run prepublish` - Runs the `build` command when you publish a new version of your code to npm

### abc build

**Compiles the source files from `src/` into a `build/` directory.** Thanks to this, you can use the latest language features of JavaScript and compile them into JavaScript that runs in older browsers or older versions of Node. You can find an overview of all the new language features [here](https://babeljs.io/docs/plugins/preset-stage-0/) and [here](http://babeljs.io/docs/plugins/preset-latest/).

### abc test

**Runs the test files in the `tests/` directory.** Using unit tests, you can check if your module always works in the way you expect it to. You can also see which parts of your code are covered by your tests by opening the generated `coverage/lcov-report/index.html` in your browser.

### abc lint

**Checks if your code is consistent and follows best practices.** By using a linter you can ensure that all your code looks the same, even if it was written by different developers. Linting also helps to catch common errors. This module uses the [standard](http://standardjs.com/) style guide.

### abc run src/file.js

**Runs a specified file.** Because we are using compiled code, it can get tedious if you have to run `build` before you can run your code. Using the `run` command, you can just specify the file and get it compiled and executed in one single step. *This is used for development purposes, in production you should always use the compiled files generated using the `build` command!*

## Internals

- **Compiling**
  - [`babel-cli`](https://github.com/babel/babel) - Compiler for writing next generation JavaScript
  - [`babel-preset-latest`](https://github.com/babel/babel/tree/master/packages/babel-preset-latest) - Compiling everything what's in ES2015+
  - [`babel-preset-stage-0`](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0) - Compiling up-and-coming language features
- **Testing**
  - [`mocha`](https://github.com/mochajs/mocha) - Simple & flexible test framework
  - [`chai`](https://github.com/chaijs/chai) - BDD / TDD assertion framework
  - [`nyc`](https://github.com/istanbuljs/nyc) - Code coverage tool
  - [`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul) - Instruments your code with Istanbul coverage
  - [`babel-plugin-rewire`](https://github.com/speedskater/babel-plugin-rewire) - Adds the ability to rewire module dependencies
- **Linting**
  - [`snazzy`](https://github.com/feross/snazzy) - One JavaScript Style Guide to Rule Them All
  - [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint all valid Babel code, including `stage-0`
- **Continuous Integration**
  - [Travis](https://travis-ci.org/) - Continuous integration service
  - [`codecov`](https://github.com/codecov/codecov-node) - Code coverage badges in your repository

## Licence

MIT