const { Schema, model } = require('mongoose');


const wouldYouRatherSchema = new Schema(
  {
    question: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
 
});

const WouldYouRather = model('WouldYouRather', wouldYouRatherSchema);

module.exports = WouldYouRather;