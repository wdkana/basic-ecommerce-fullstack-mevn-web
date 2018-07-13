const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  kode: {
    type: String
  },
  jenis: {
    type: String
  },
  harga:{
    type: Number
  },
  stok:{
    type: Number
  }
})

const Pastry = mongoose.model('pastry', UserSchema)
module.exports = Pastry
