const { Schema, model } = require('mongoose');


const wouldYouRatherSchema = new Schema(
  {
    question: { type: String, required: true },

});

const WouldYouRather = model('WouldYouRather', wouldYouRatherSchema);

module.exports = WouldYouRather, wouldYouRatherSchema;