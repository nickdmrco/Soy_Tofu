const router = require('express').Router()

router.use('/api', require('./catagoryRoutes.js'))
router.use('/api', require('./foodRoutes.js'))
router.use('/api', require('./ordersRoutes'))
module.exports = router
