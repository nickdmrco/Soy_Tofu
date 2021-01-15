const { model, Schema } = require('mongoose')

module.exports = model('Media', new Schema({
  title: String,
  year: Number,
  imdbID: String,
  type: String,
  poster: String
}))
