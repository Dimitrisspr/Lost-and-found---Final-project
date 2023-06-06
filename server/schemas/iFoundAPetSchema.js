const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
  description: String,
  photo:  String,
  location: Object,
  time: String,
  email: String,

})

const foundModel = mongoose.model("found", foundSchema)
module.exports = foundModel;