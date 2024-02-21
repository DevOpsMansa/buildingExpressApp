const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const sampleData = {
  pageTitle: 'Express Pug Views',
  headerTitle: 'Welcome to My App',
  mainContent: 'This is the main content of the page.',
  year: new Date().getFullYear(),
};

app.get('/', (req, res) => {
  res.render('view1', {
    ...sampleData,
    imagePath: '/sample-image.jpg',
  });
});

app.get('/download-image', (req, res) => {
  // Using the res.download() to trigger a file download
  const imagePath = path.join(__dirname, 'public', 'sample-image.jpg');
  res.download(imagePath, 'downloaded-image.jpg', (err) => {
    if (err) {
      // Handle error
      console.error('Download failed:', err);
      res.status(500).send('Download failed');
    }
  });
});

app.get('/view2', (req, res) => {
  res.render('view2', sampleData);
});

app.post('/submitForm', (req, res) => {
  console.log('Form data:', req.body);
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
