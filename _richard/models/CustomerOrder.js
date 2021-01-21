const { model, Schema } = require('mongoose')

module.exports = model(
  'CustomerOrder',
  new Schema({
    email: String,
    firstName: String,
    lastName: String,
    state: Number,
    orders: [],
  }),
)
