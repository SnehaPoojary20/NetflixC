const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts'); // Import express-ejs-layouts

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory to the correct path
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts middleware but without using a layout file
app.use(ejsLayouts);

// Disable layout in express-ejs-layouts
app.set('layout', false); // This disables automatic layout rendering

// Serve static files (images, css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Example route to render 'index' view
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' }); // Rendering 'index.ejs'
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



