const { Schema, model } = require('mongoose');


const lawSchema = new Schema(
  {
    content: { type: String, required: true },
 
});

const Law = model('Law', lawSchema);

module.exports = Law, lawSchema;