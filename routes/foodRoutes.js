const router = require('express').Router()
const { Food } = require('../models')

router.get('/foods', (req, res) => {
  Food.find()
    .then((foods) => res.json(foods))
    .catch((err) => console.log(err))
})

module.exports = router