const Router = require('express')
const router = new Router
const authMiddleware = require('../middlewares/authMiddleware')

const authRoutes = require('./authRoutes')
const imageRoutes = require('./imageRoutes')
const userRoutes = require('./userRoutes')
const companyRoutes = require('./companyRoutes')
const postRoutes = require('./postRoutes')

router.use('/authUser', authRoutes)
router.use('/image', imageRoutes)
router.use('/user', authMiddleware, userRoutes)
router.use('/company', companyRoutes)
router.use('/post',postRoutes)

module.exports = router