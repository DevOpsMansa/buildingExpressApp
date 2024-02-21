//the template.html file serves as your Mustache.js template, and the renderView function in viewEngine.js renders the template with dynamic data.

const express = require("express");
const fs = require("fs");
const mustache = require("mustache");

// Load your template file
const template = fs.readFileSync("template.html", "utf8");

// Define a function to render the template with dynamic data
function renderView(data) {
  return mustache.render(template, data);
}

// Export the renderView function
module.exports = renderView;

//added view engine in the application. the template.html file serves as your Mustache.js template, and the renderView function in viewEngine.js renders the template with dynamic data.


const renderView = require('./viewEngine');

// Example data to customize the view
const data = {
  pageTitle: 'Customizing Views with Mustache.js',
  headerTitle: 'Welcome to My Website',
  mainContent: 'This is the main content of the page.',
  year: new Date().getFullYear(),
};

// Render the view with the dynamic data
const renderedHtml = renderView(data);

// Output the rendered HTML
console.log(renderedHtml);
