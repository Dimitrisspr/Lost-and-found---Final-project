const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
  name: {String, required: false},
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
})