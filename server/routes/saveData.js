const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Image = mongoose.model("image");

router.use('/api/post', (req, res, next) => {

const {title, url, id} = req.body;
    let saveRecord = new Image({ name: title, imageUrl: url, discogsId: id });

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