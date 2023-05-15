const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: {data: Buffer, contentType: String},
  location: String,
  // {
  //   type: {
  //     type: String,
  //     enum: ['Point'],
  //     required: true,
      
  //     coordinates:{
  //       type: [Number],
  //       required: true
  //     }
  //   }
  // },
  time: String,
  // Date,
  // ownersID: String,
  // ownersFCMID: String,
})

const lostModel = mongoose.model("lost", lostSchema)
module.exports = lostModel;