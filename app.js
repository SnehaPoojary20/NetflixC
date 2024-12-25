const express = require('express');
const app = express();

// Middleware
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', './views');   // Views directory
app.use(express.static('public')); // Serve static files

// Routes
const homeRouter = require('./routes/home');
app.use('/', homeRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
