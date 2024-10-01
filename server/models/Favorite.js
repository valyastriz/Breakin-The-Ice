const { Schema, model } = require('mongoose');
const lawSchema = require('./Law');
const wouldYouRatherSchema = require('./WouldYouRather');


const favoriteSchema = new Schema({
  savedLaws: [lawSchema],
  wouldYouRather: [wouldYouRatherSchema],
});

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;
