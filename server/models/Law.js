const { Schema, model } = require('mongoose');


const lawSchema = new Schema(
  {
    law: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
 
});

const Law = model('Law', lawSchema);

module.exports = Law;