#!/usr/bin/env bash
set -e

# Setup the test folder
rm -rf tmp-test/
mkdir tmp-test/
cd tmp-test/

# Install the module (and trick it with the package.json)
npm init -y
npm install ../
sed -i -e 's/"name": "tmp-test",/"name": "tmp-test", "devDependencies": {"abc-environment": "testing"},/' package.json

# Run the demo tests of the module with itself
node_modules/.bin/abc setup
node_modules/.bin/abc test
node_modules/.bin/abc lint
echo "Test successful!"

# Tear down the test folder
cd ../
rm -rf tmp-test/
