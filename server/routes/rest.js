const express = require('express');
const keys = require('../config/keys');
const fetch = require("node-fetch");

const getDiscogsData = async (search) => {

    const url = `https://api.discogs.com/database/search?q=${search}&key=${keys.discogsConsumerKey}&secret=${keys.discogsConsumerSecret}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = getDiscogsData;