const { model, Schema } = require('mongoose')

module.exports = model(
  'Config',
  new Schema({
    catagories: Array,
  }),
)
