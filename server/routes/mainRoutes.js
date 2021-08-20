const Router = require('express')
const router = new Router

const authRoutes = require('./authRoutes')
const imageRoutes = require('./imageRoutes')

router.use('/authUser', authRoutes)
router.use('/image', imageRoutes)

module.exports = router