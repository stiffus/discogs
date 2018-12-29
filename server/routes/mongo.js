const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Image = mongoose.model("image");

// router.get('/mongo', async (req, res, next) => {
//     //const image = await Image.find({discogsId: 28693}).select();
//     const image = await Image.find();

//     res.send(image);

// });

const getDatabaseRecords = async () => {
    try {
        const image = await Image.find();
      return image;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = getDatabaseRecords;