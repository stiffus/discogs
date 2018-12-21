const express = require('express');
const router = express.Router();
const path = require('path');
const Image = require('../models/Image');

router.get('/search', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../src', 'views', 'search.html'));
});

  router.use('/api/post', (req, res, next) => {

    const {title, url} = req.body;
     let saveRecord = new Image({ name: title, imageUrl: url });
    
     saveRecord
        .save()
        .then(item => { 
            console.log(`sparade ${saveRecord}`);
            res.send("sparad")
        })
        .catch(err => {
        res.status(400).send("Something went wrong")
    });
  });

module.exports = router;