const { Schema, model } = require('mongoose');


const iceBreakerSchema = new Schema(
  {
    content: { type: String, required: true },

});

const IceBreaker = model('IceBreaker', iceBreakerSchema);

module.exports = IceBreaker, iceBreakerSchema;