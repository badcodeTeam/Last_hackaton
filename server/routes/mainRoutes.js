const Router = require('express')
const router = new Router
const authMiddleware = require('../middlewares/authMiddleware')
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware')

const authRoutes = require('./authRoutes')
const imageRoutes = require('./imageRoutes')
const userRoutes = require('./userRoutes')
const companyRoutes = require('./companyRoutes')
const postRoutes = require('./postRoutes')
const eventRoutes = require('./eventRoutes')
const ticketRoutes = require('./ticketRoutes')

router.use('/authUser', authRoutes)
router.use('/image', imageRoutes)
router.use('/user', authMiddleware, userRoutes)
router.use('/company', companyRoutes)
router.use('/post',postRoutes)
router.use('/event', eventRoutes)
router.use('/ticket', ticketRoutes)

module.exports = router