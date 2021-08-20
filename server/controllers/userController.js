const userService = require('../services/userService')
const ApiError = require('../handler/apiError')

class UserController {
    
    async getClientInfo (req, res, next) {
        try {
            const userId = req.params.id;
            const userData = await userService.getUserData(userId)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async updateEmailNumber (req, res, next) {
        try{
            const {userId, email, number} = req.body
            const userData = await userService.updateEmailNumber(userId, email, number)
            return res.status(200).json({"message":"Данные обновляются"})
        } catch (e) {
            next(e)
        }
    }
}
 
module.exports = new UserController();