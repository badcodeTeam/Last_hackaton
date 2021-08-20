const Router = require('express')
const router = new Router
const authMiddleware = require('../middlewares/authMiddleware')

const authRoutes = require('./authRoutes')
const imageRoutes = require('./imageRoutes')
const userRoutes = require('./userRoutes')

router.use('/authUser', authRoutes)
router.use('/image', authMiddleware, imageRoutes)
router.use('/user', authMiddleware, userRoutes)

module.exports = router