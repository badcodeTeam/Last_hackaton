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

    async updateEmailNumber(userId, email, number) {
        const user = await User.findByIdAndUpdate(userId, {email, number})
        if(!user){
            throw ApiError.BadRequestError('Ошибка обновления')
        }
        const clientDto = new ClientDto(user)
        return {clientDto}
    }
}

module.exports = new UserService();