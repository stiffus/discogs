const express = require('express');
const router = express.Router();
const path = require('path');
const Image = require('../models/Image');

router.get('/search', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../src', 'views', 'search.html'));
});

  router.use('/api/post', (req, res, next) => {

    const imageUrl = Object.values(req.body);

    // console.log(`Inside post, ${imageUrl}`);
    // let jsonObj = JSON.stringify({"name": "math"});
    //res.send(jsonObj);
    
     let myData = new Image({ name: "foosrgjid", imageUrl: imageUrl });

     console.log(myData);
    
     myData
        .save()
        .then(item => { 
            console.log('sparad');
            res.send("sparad")
        })
        .catch(err => {
        res.status(400).send("fuck off")
    });
  });

  

module.exports = router;