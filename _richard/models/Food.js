const { model, Schema } = require('mongoose')

module.exports = model(
  'Food',
  new Schema({
    name: String,
    image: String,
    catagory: String,
    options: [
      {
        name: String,
        choices: [
          {
            name: String,
            price: Number,
          },
        ],
      },
    ],

    description: String,
    lowestPrice: Number,
    highestPrice: Number,
  }),
)
