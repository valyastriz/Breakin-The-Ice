const { Schema, model } = require('mongoose');


const wouldYouRatherSchema = new Schema(
  {
    question: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
 
});



module.exports = wouldYouRatherSchema;