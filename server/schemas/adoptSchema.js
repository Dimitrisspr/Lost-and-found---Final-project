const mongoose = require('mongoose')

const adoptSchema = new mongoose.Schema({
  image: {
    data: Buffer,  
    contentType: String,
    description: String
  }
})

module.exports = mongoose.model("adopt", adoptSchema)