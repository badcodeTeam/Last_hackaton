const PostService = require('../services/postService')
const ApiError = require('../handler/apiError')
const jwt = require('jsonwebtoken');


class PostController {
    
    //  http://localhost:5000/contactor/post/addPost
    async addPost (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decodedToken = jwt.verify(token, process.env.SECRET)
            const {postHeader,text} = req.body;
            const createPost = await PostService.addPost(postHeader, text, decodedToken.id)
            return res.json(createPost)
        } catch (e) {
            next(e)
        }
    }

        //  http://localhost:5000/contactor/post/addPostFromCompany
        async addPostFromCompany (req, res, next) {
            try {
                const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
                const decodedToken = jwt.verify(token, process.env.SECRET)
                const {postHeader,text,companyName} = req.body;
                const createPost = await PostService.addPost(postHeader, text, decodedToken.id, companyName)
                return res.json(createPost)
            } catch (e) {
                next(e)
            }
        }
}

module.exports = new PostController();