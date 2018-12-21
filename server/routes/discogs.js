const express = require('express');
const router = express.Router();
const keys = require('../config/keys');

const fetch = require("node-fetch");

router.post('/discogs', async (req,res, next) => {
const url = `https://api.discogs.com/database/search?q=${Object.values(req.body)}&key=${keys.discogsConsumerKey}&secret=${keys.discogsConsumerSecret}`;

const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  const callbackObj = {
     call(i) {
      console.log('inne ifrån dsf');
      return `Hello ${i}`;
    }
  }
    


    const artistInfo = await getData(url);
    const artistObj = Object.values(artistInfo)[1];
    
    res.render('discogs-search', {recordsImg: artistObj, callback: callbackObj});
});

module.exports = router;