const router = require('express').Router()
const { Food } = require('../models')

router.get('/food', (req, res) => {
  Food.Find()
    .then((food) => res.json(food))
    .catch((err) => console.log(err))
})

router.post('/food', (req, res) => {
  Food.create(req.body)
    .then((food) => res.json(food))
    .catch((err) => console.log(err))
})

router.put('/food/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
})

router.delete('/food/:id', (req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
})

module.exports = router
