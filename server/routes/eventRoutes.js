const Router = require('express');
const router = new Router();
const eventController = require('../controllers/eventController')

//  http://localhost:5000/contactor/event/activate/:link
router.get('/activate/:link', eventController.activate)

//  http://localhost:5000/contactor/event/addEvent
router.post('/addEvent', eventController.addEvent)

module.exports = router