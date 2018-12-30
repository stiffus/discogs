const express = require('express');
const router = express.Router();

const getDatabaseRecords = require('./mongo');
const getDiscogsData = require('./rest');

const compareRecords = (savedRecords, id) => {
  return !savedRecords.find((record) => record.discogsId == id );
}

router.post('/discogs', async (req,res, next) => {

  const recordInfo = await getDiscogsData(Object.values(req.body));
  const recordObj = Object.values(recordInfo)[1];
  
  const savedRecords = await getDatabaseRecords();
  const showArtistRecords = recordObj.filter( record => compareRecords(savedRecords, record.id));

  res.render('discogs-search', {recordsImg: showArtistRecords});
});

module.exports = router;