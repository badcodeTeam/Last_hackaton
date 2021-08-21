const Post = require('../models/Post')
const User = require('../models/User')
const Company = require('../models/Company')
const ApiError = require('../handler/apiError')

class PostServie {
    
    async getClientPosts(userId) {
        try {
            const user = await User.findById(userId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            console.log(user)
            const userPosts = await Post.find({author:userId})
            console.log(userPosts)
            return {userPosts}
        } catch (e) {
            return null
        }
    }

    async getCompanyPosts (companyName) {
        try {
            const CompanyPosts = await Post.findAll({where: {companyName}})
            return {CompanyPosts}
        } catch (e) {
            return null
        }
    }



    async addPost (postHeader, text,author) {
        try {
            console.log(postHeader, text, author)
            const user = await User.findById(author)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createPost = await Post.create({postHeader, text, author})
            console.log(createPost)
            return {createPost}
        } catch (e) {
            return e
        }
    }

    async addPostFromCompany (postHeader, text, author, companyName) {
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