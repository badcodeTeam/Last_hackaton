const Post = require('../models/Company')
const User = require('../models/User')
const ApiError = require('../handler/apiError')

class PostServie {
    
    async getClientPosts (userId) {
        try {
            const user = await User.findById(userId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const userPosts = await Post.findAll({where: {author:userId}})
            return {userPosts}
        } catch (e) {
            return null
        }
    }
}

module.exports = new PostServie();