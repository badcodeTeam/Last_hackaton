const PostService = require('../services/postService')
const ApiError = require('../handler/apiError')

class PostController {
    
    //  http://localhost:5000/contactor/user/getClientInfo/:id
    async getClientPosts (req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PostController();