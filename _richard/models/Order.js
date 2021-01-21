const { model, Schema } = require('mongoose')

module.exports = model(
  'Order',
  new Schema({
    email: String,
    firstName: String,
    lastName: String,
    state: Number,
    orders: [],
  }),
)
