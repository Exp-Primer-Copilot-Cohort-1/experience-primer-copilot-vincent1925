// Create web server
// Start server
// Create a route
// Create a template
// Load the template
// Load the comments
// Render the template with the comments
// Serve the template

var http = require('http');
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

