const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: {data: Buffer, contentType: String},
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  time: Date,
})
const foundModel = mongoose.model("found", foundSchema)
module.exports = foundModel;