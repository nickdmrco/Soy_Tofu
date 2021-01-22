const router = require('express').Router()
const { Catagory } = require('../models')

router.get('/catagories', (req, res) => {
 Catagory.find()
  .then((catagory) => res.json(catagory))
  .catch((err) => console.log(err))
})

module.exports = router