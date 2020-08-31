const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const fileSchema = new Schema({
  name: String,
  size: Number,
  mimetype: String,
  data: Buffer,
  slug: String
})

module.exports = mongoose.model('FileSchema', fileSchema);