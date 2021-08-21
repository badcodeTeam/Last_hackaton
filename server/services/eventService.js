const Event = require('../models/Event')
const ApiError = require('../handler/apiError')

class EventService {

    async createEvent(userId, eventName) {
        console.log(userId)
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.BadRequestError('Пользователь не был найден')
        }

        const eventLink = uuid.v4()
        const createEvent = await Event.create({eventName, eventLink})
        const eventLink = process.env.API_URL + '/contactor/event/activate/' + eventLink  
    }
}

module.exports = new EventService();