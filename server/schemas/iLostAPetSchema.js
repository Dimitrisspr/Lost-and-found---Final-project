const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  location: String,
  time: String,
  //ownersid: String,
  // ownersFCMID: String,
});

const lostModel = mongoose.model("lost", lostSchema);
module.exports = lostModel;
