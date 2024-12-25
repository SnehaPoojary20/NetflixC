const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts'); // Import the package

const app = express();

// Set up view engine and layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(ejsLayouts); // Use the express-ejs-layouts middleware

app.use(express.static('public')); // Serve static files like CSS, images, etc.

// Define routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

