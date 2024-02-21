const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data for rendering views
const sampleData = {
  pageTitle: 'Express Pug Views',
  headerTitle: 'Welcome to My App',
  mainContent: 'This is the main content of the page.',
  year: new Date().getFullYear(),
};

// Route to render the first view
app.get('/', (req, res) => {
  res.render('view1', sampleData);
});

// Route to render the second view
app.get('/view2', (req, res) => {
  res.render('view2', sampleData);
});

// Route to handle form submission
app.post('/submitForm', (req, res) => {
  // Log form data to the console
  console.log('Form data:', req.body);

  // Send a simple success response
  res.send('Form submitted successfully!');
});

// Route with a parameter modifying the rendered content
app.get('/dynamic/:param', (req, res) => {
  const dynamicData = {
    pageTitle: 'Dynamic View',
    headerTitle: 'Dynamic Page',
    mainContent: `This is the dynamic content for parameter: ${req.params.param}`,
    year: new Date().getFullYear(),
  };

  res.render('dynamicView', dynamicData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
