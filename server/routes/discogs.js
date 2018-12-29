const express = require('express');
const router = express.Router();
const keys = require('../config/keys');

const getDatabaseRecords = require('./mongo');
const getDiscogsData = require('./rest');

const fetch = require("node-fetch");

const compareRecords = (savedRecords ,id) => {
  return !savedRecords.find((record) => record.discogsId == id );
}

router.post('/discogs', async (req,res, next) => {

    const artistInfo = await getDiscogsData(Object.values(req.body));
    const artistObj = Object.values(artistInfo)[1];
    
    const savedRecords = await getDatabaseRecords();
    const showArtistRecords = artistObj.filter( artist => compareRecords(savedRecords, artist.id));

    res.render('discogs-search', {recordsImg: showArtistRecords});
});

module.exports = router;