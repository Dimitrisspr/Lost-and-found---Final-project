const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  location: String,
  time: String,
  email: String,
});

const lostModel = mongoose.model("lost", lostSchema);
module.exports = lostModel;
