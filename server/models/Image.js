const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({ 
        name: String,
        imageUrl: String,
        discogsId: Number
 });

 module.exports = mongoose.model('image', imageSchema);