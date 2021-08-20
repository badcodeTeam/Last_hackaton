const authService = require('../services/authService')
const {validationResult} = require('express-validator')
const ApiError = require('../handler/apiError')

class AuthController {

        //  http://localhost:5000/contactor/authUser/register
        async register (req,res,next) {
            try{
                const errors = validationResult(req)
                if(!errors.isEmpty()){
                    return next(ApiError.BadRequestError('Ошибка при валидации',errors.array()))
                }
                const {email,password} = req.body
                const userData = await authService.registration(email, password)
                return res.json(userData)
            } catch (e) {
                next(e)
            }
        }
    
        //  http://localhost:5000/contactor/authUser/login
        async login (req,res,next) {
            try {
                const {email,password} = req.body
                console.log(email,password)
                const userData = await authService.login(email, password)
                return res.json(userData)
            } catch (e) {
                next(e)
            }
        }
    
        //  http://localhost:5000/contactor/authUser/activate:link
        async activate (req,res,next) {
            try {
                const activationLink = req.params.link
                const link = await authService.activate(activationLink)
                if(!link) {
                    return res.sendFile(path.join(__dirname, '../public', 'activated.html'))
                }
                return res.sendFile(path.join(__dirname, '../public', 'activationError.html'))
            } catch (e) {
                next(e)
            }
        }
}

module.exports = new AuthController()