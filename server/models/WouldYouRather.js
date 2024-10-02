const { Schema, model } = require('mongoose');


const wouldYouRatherSchema = new Schema(
  {
    content: { type: String, required: true },

});

const WouldYouRather = model('WouldYouRather', wouldYouRatherSchema);

module.exports = WouldYouRather, wouldYouRatherSchema;