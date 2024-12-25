const express = require('express');
const router = express.Router();
const { getHomePage } = require('../Controllers/homeController.js');

// Route to render the homepage
router.get('/', getHomePage);

module.exports = router;
