const User = require('../models/User')
const ApiError = require('../handler/apiError')
const ClientDto = require('../dtos/clientDto')

class UserService {

    async getUserData(userId) {
        console.log(userId)
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.BadRequestError('Пользователь с таким email не был найден')
        }
        const clientDto = new ClientDto(user)
        return {clientDto}
    }
}

module.exports = new UserService();