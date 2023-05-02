const mongoose = require("mongoose");

const adoptSchema = new mongoose.Schema({
  image: Buffer,
  contentType: String,
  description: String,
});

const adoptModel = mongoose.model("adopt", adoptSchema);
module.exports = adoptModel;
