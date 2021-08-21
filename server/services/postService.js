const Post = require('../models/Company')
const User = require('../models/User')
const Company = require('../models/Company')
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

    async addPost (postHeader, text,author) {
        try {
            const user = await User.findById(author)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createPost = await Post.create({postHeader, text, author})
            return {createPost}
        } catch (e) {
            return null
        }
    }

    async addPostFromCompany (postHeader, text,author, companyName) {
        try {
            const user = await User.findById(author)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createPost = await Post.create({postHeader, text, author, companyName})
            const addPostToCompany = await Company.updateOne({companyName}, {$push: { posts:createPost._id } }) 
            return {createPost}
        } catch (e) {
            return null
        }
    }
}

module.exports = new PostServie();