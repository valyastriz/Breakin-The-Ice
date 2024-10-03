const { Schema, model } = require('mongoose');


const factSchema = new Schema(
  {
    content: { type: String, required: true },

});

const Fact = model('Fact', factSchema);

module.exports = Fact, factSchema;