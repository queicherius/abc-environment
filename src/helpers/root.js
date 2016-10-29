// Get the root path of the project the command is executing in
var path = require('path')

// {project root}/node_modules/abc-environment/src/helpers/{here we are}
var root = path.join(__dirname, '../../../../')

module.exports = root
