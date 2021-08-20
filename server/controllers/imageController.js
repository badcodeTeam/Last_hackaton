const Img = require('../models/Image')
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const ApiError = require('../handler/apiError')
const path = require('path')
 
class ImgController {

    async getUserImage(req, res, next){

        const userId = req.params.id;
        const user = await User.findById(userId)
 
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

        const file = req.body.files
        
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET)
        const user = await User.findById(decodedToken.id)
        if(!user){
            return next(ApiError.BadRequestError('Пользователь не найден'))
        }
        if(!file) {
            return next(ApiError.BadRequestError('Файлы отсутствуют'))
        }
        const type = file.name.split('.').pop()
        const avatar = decodedToken.id + '.' + type
        file.mv(`public/avatars/` + fname, function(err) {
            if(err) {
                return next(ApiError.internal('Ошибка сохранения файла'))
            }
        })
        const saveAvatar = await User.updateOne({_id:decodedToken.id}, {avatar})
        return res.json(saveAvatar)
    }
}
 
module.exports = new ImgController();