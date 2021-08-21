const EventService = require('../services/eventService')
const ApiError = require('../handler/apiError')
const jwt = require('jsonwebtoken');
const path = require("path")


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

        //  http://localhost:5000/contactor/event/activate/:link
        async activate (req,res,next) {
            try {
                const activationLink = req.params.link
                const link = await EventService.activate(activationLink)
                if(!link) {
                    return res.sendFile(path.join(__dirname, '../public', 'event.html'))
                }
                return res.sendFile(path.join(__dirname, '../public', 'eventError.html'))
            } catch (e) {
                next(e)
            }
        }

        //  http://localhost:5000/contactor/event/getEvents
        async getEvents (req,res,next) {
            try{
                const allEvents = await EventService.getAllEvents();
                return res.json(allEvents)
            } catch (e) {
                next(e)
            }
        }

}

module.exports = new EventController();