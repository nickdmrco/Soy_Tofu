const router = require('express').Router()

router.post('/orders', (req, res) => {
  console.log(req.body)
})

module.exports = router
