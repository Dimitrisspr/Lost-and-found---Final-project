const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: { type: String, required: [true, "Password is required"] },
  ownersid: String
});

module.exports = mongoose.model.User || mongoose.model("User", userSchema);
