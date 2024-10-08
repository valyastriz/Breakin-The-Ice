const { Schema, model } = require('mongoose');


const bingoSchema = new Schema(
  {
    content: { type: String, required: true },

});

const Bingo = model('Bingo', bingoSchema);

module.exports = Bingo, bingoSchema;