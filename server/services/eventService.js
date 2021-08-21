const Event = require('../models/Event')
const User = require('../models/User')
const ApiError = require('../handler/apiError')
const uuid = require('uuid')

class EventService {

    async createEvent(userId, eventName) {
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.BadRequestError('Пользователь не был найден')
        }
        const eventLink = uuid.v4()
        const createEvent = await Event.create({eventName, eventLink, eventCreator:userId})
        const activationLink = process.env.API_URL + '/contactor/event/activate/' + eventLink  
        return {createEvent,eventLink,activationLink}
    }

    async activate (eventLink) {
        const event = await Event.findOne({eventLink})
        if(!event) {
            throw ApiError.BadRequestError('Неккоректная ссылка активации')
        }
        const counter = (event.counter + 1)
        await event.updateOne({counter})
        await event.save()
    }

    async getAllEvents() {
        try{
            const getAllEvents = await Event.find()
            if(!getAllEvents){
                throw ApiError.BadRequestError('Мероприятия не найдены')
            }
            return {getAllEvents}
        } catch(e){
            return e
        }
    }

}

module.exports = new EventService();


