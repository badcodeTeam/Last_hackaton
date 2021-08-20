const Img = require('../models/Image')
const User = require('../models/User')
const path = require('path')
 
class ImgController {
    async getUserImage(req, res, next){

        const userId = req.params.id;
        const user = await User.findById({userId})
 
        if(!user){
            return next(ApiError.BadRequestError('Пользователь не найден'))
        }
 
        const img = await Img.findOne({path: user.avatar})
 
        if(!img){
            return res.sendFile(path.join(__dirname, '../public/avatars', 'default.jpeg'))
        }
 
        return res.sendFile(path.join(__dirname, '../public/avatars', user.avatar))
    }

    async uploadAvatar(req, res, next) {
        
    }
}
 
module.exports = new ImgController();