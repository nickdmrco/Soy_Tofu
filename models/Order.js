const { model, Schema } = require('mongoose')

module.exports = model(
  'Order',
  new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    orderNumber: Number,
    state: Number,
    orders: [],
  }),
)
