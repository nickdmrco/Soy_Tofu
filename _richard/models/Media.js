const { model, Schema } = require('mongoose')

module.exports = model(
  'Food',
  new Schema({
    name: String,
    image: String,
    price: Number,
    catagory: String,
    description: String,
  }),
)
