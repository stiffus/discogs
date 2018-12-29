const express = require('express');
const mongoose = require("mongoose");
const Image = mongoose.model("image");

const getDatabaseRecords = async () => {
    try {
        const image = await Image.find();
      return image;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = getDatabaseRecords;