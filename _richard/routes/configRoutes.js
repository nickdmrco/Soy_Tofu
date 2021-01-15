const router = require('express').Router()
const { Config } = require('../models')

router.get('/config', (req, res) => {
  Config.find()
    .then((config) => res.json(config))
    .catch((err) => console.log(err))
})

module.exports = router
