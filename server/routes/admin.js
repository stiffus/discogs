const express = require('express');
const router = express.Router();
const path = require('path');
const Image = require('../models/Image');
const getDatabaseRecords = require('./mongo');

router.get('/search', (req, res, next) => {
res.sendFile(path.join(__dirname, '../../src', 'views', 'search.html'));
});

router.get('/saved-images', async (req, res, next) => {

    const images = await getDatabaseRecords();

    res.render('saved-images', {recordsImg: images});

});

module.exports = router;