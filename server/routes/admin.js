const express = require('express');
const router = express.Router();
const path = require('path');
const Image = require('../models/Image');

router.get('/search', (req, res, next) => {
res.sendFile(path.join(__dirname, '../../src', 'views', 'search.html'));
});

module.exports = router;