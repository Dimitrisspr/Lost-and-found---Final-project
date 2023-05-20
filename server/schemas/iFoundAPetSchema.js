const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
  description: String,
  photo:  String,
  location: String,
  time: String,
})

const foundModel = mongoose.model("found", foundSchema)
module.exports = foundModel;