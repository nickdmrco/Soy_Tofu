
const router = require('express').Router()
const { Order } = require('../models')

router.post('/orders', (req, res) => {
 Order.create(req.body)
  .then((order) => res.json(order))
  .catch((err) => console.log(err))
})
module.exports = router