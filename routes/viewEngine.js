//the template.html file serves as your Mustache.js template, and the renderView function in viewEngine.js renders the template with dynamic data.

const express = require("express")
const fs = require('fs');
const mustache = require('mustache');

// Load your template file
const template = fs.readFileSync('template.html', 'utf8');

// Define a function to render the template with dynamic data
function renderView(data) {
  return mustache.render(template, data);
}

// Export the renderView function
module.exports = renderView;
