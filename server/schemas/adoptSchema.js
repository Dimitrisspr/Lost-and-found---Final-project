const mongoose = require("mongoose");

const adoptSchema = new mongoose.Schema({

  description: String,
});

const adoptModel = mongoose.model("adopt", adoptSchema);
module.exports = adoptModel;
