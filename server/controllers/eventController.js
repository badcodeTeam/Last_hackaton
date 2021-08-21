const EventService = require('../services/eventService')
const ApiError = require('../handler/apiError')
const jwt = require('jsonwebtoken');


class EventController {
    
        //  http://localhost:5000/contactor/event/addEvent
        async addEvent (req, res, next) {
            try {
                const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
                const decodedToken = jwt.verify(token, process.env.SECRET)
                const {eventName} = req.body;
                const createEvent = await EventService.createEvent(decodedToken.id, eventName)
                return res.json(createEvent)
            } catch (e) {
                next(e)
            }
        }

}

module.exports = new EventController();