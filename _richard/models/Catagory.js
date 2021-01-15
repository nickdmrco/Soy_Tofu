const { model, Schema } = require('mongoose')

module.exports = model(
  'Catagory',
  new Schema({
    name: String,
  }),
)
