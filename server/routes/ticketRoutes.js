const Router = require('express')
const router = new Router
const ticketController = require('../controllers/ticketController')
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//  http://localhost:5000/contactor/ticket/getTicket/:id
router.get('/getTicket/:id', ticketController.getTicketsById)

//  http://localhost:5000/contactor/ticket/addTicket
router.post('/addTicket', ticketController.addTicket)

//  http://localhost:5000/contactor/ticket/getTickets
router.get('/getTickets', ticketController.getTickets)

module.exports = router