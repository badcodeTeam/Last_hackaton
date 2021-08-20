const Router = require('express')
const router = new Router

const authRoutes = require('./authRoutes')

router.use('/authUser', authRoutes)

module.exports = router