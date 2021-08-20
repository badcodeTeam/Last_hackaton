const userService = require('../services/userService')
const ApiError = require('../handler/apiError')
const jwt = require('jsonwebtoken');

class UserController {
    
    async getClientInfo (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decodedToken = jwt.verify(token, process.env.SECRET)
            const userData = await userService.getUserData(decodedToken.id)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}
 
module.exports = new UserController();