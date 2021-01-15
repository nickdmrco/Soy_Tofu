const router = require('express').Router()
const { Catagory } = require('../models')

router.get('/catagories', (req, res) => {
  Catagory.find()
    .then((catagories) => res.json(catagories))
    .catch((err) => console.log(err))
})

module.exports = router
