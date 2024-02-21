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


//use the templates with the Mustache.js view engine by loading the respective template file and rendering it with dynamic data

const fs = require('fs');
const mustache = require('mustache');

// Load template files
const template = fs.readFileSync('template.html', 'utf8');
const alternateTemplate = fs.readFileSync('alternateTemplate.html', 'utf8');

// Example data for rendering
const data = {
  pageTitle: 'Customizing Views with Mustache.js',
  headerTitle: 'Welcome to My Website',
  mainContent: 'This is the main content of the page.',
  year: new Date().getFullYear(),
};

// Render the default template
const renderedHtml = mustache.render(template, data);
console.log('Default Template:\n', renderedHtml);

// Render the alternate template
const alternateRenderedHtml = mustache.render(alternateTemplate, data);
console.log('\nAlternate Template:\n', alternateRenderedHtml);
