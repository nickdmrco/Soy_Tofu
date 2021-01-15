const router = require('express').Router()
const { Food } = require('../models')

router.get('/food', (req, res) => {
  Food.find()
    .then((food) => res.json(food))
    .catch((err) => console.log(err))
})

module.exports = router
