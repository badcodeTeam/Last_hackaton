const userService = require('../services/userService')
const postService = require('../services/postService')
const ApiError = require('../handler/apiError')

class UserController {
    
    //  http://localhost:5000/contactor/user/getClientInfo/:id
    async getClientInfo (req, res, next) {
        try {
            const userId = req.params.id;
            const userData = await userService.getUserData(userId)
            const userPosts = await postService.getClientPosts(userId)
            console.log(userPosts)
            if(!userPosts) {
                return res.json(userData)
            }
            return res.json(userData, userPosts)

        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/contactor/user/updateEmailNumber
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