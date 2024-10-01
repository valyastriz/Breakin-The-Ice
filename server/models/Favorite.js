const { Schema, model } = require('mongoose');
const lawSchema = require('./Law');
const wouldYouRatherSchema = require('./WouldYouRather');


const favoritesSchema = new Schema({
  savedLaws: [lawSchema],
  wouldYouRather: [wouldYouRatherSchema],
});


module.exports = favoritesSchema;
