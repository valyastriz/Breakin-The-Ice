const { Schema, model } = require('mongoose');
const lawSchema = require('./Law');
const { ObjectId } = Schema.Types; 
const wouldYouRatherSchema = require('./WouldYouRather');


const favoritesSchema = new Schema({
  savedLaws: [{ type: ObjectId, ref: 'Law' }],
  wouldYouRather: [{ type: ObjectId, ref: 'WouldYouRather' }],
});

const Favorite = model('Favorite', favoritesSchema);

module.exports = Favorite, favoritesSchema;
