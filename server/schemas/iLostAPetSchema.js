const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: {data: Buffer, contentType: String},
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      coordinates:{
        type: [Number],
        required: true
      }
    }
  },
  time: Date,
  ownersID: String
})

module.exports = mongoose.model("lost", lostSchema)