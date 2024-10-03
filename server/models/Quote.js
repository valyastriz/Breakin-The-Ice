const { Schema, model } = require('mongoose');


const quoteSchema = new Schema(
  {
    content: { type: String, required: true },

});

const Fact = model('Quote', quoteSchema);

module.exports = Quote, quoteSchema;