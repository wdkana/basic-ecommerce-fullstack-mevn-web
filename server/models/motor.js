const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  plat: {
    type: String
  },
  merk: {
    type: String
  },
  jenis: {
    type: String
  },
  cc: {
    type: Number
  },  
  harga: {
    type: Number
  }
})

const Motor = mongoose.model('motor', UserSchema)
module.exports = Motor
