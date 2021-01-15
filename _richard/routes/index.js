const router = require('express').Router()

router.use('/api',require('./foodRoutes.js'))
module.exports = router
