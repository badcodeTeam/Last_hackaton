const User = require('../models/User')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const ApiError = require('../handler/apiError')
const UserDto = require('../dtos/userDto')
const tokenService = require('./tokenService')
const mailService = require('./mailService')

class AuthService {

    async registration(email,password, name, number) {
        
        const candidate = await User.findOne({email})
        if (candidate) {
            throw ApiError.BadRequestError('Пользователь с таким email уже существует')
        }
        const hashedPassword = await bcrypt.hash(password,5)
        const activationLink = uuid.v4()
        const user = await User.create({email, password: hashedPassword, name,  activationLink, number})
        const userLink = process.env.API_URL + '/contactor/authUser/activate/' + activationLink    
        await mailService.sendActivationMail(email,userLink)

        const userDto = new UserDto(user)
        const token = tokenService.generateToken ({...userDto})

        return {token, user:userDto}
    }

    async login (email, password) {

        const user = await User.findOne({email})
        if(!user) {
            throw ApiError.BadRequestError('Пользователь с таким email не был найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.BadRequestError('Неверные данные')
        }
        const userDto = new UserDto(user)
        const token = tokenService.generateToken ({...userDto})
        return {token, user: userDto}
    }

    async activate (activationLink) {
        const user = await User.findOne({activationLink})
        if(!user) {
            throw ApiError.BadRequestError('Неккоректная ссылка активации')
        }
        await user.updateOne({isActivated: true})
        await user.updateOne({activationLink: null})
        await user.save()
    }
}

module.exports = new AuthService();