const Img = require('../models/Image')
const User = require('../models/User')
const Company = require('../models/Company')
const jwt = require('jsonwebtoken');
const ApiError = require('../handler/apiError')
const path = require('path')
 
class ImgController {
 
    //  http://localhost:5000/contactor/image/user/:id 
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
 
    //  http://localhost:5000/contactor/image/uploadAvatar
    async uploadAvatar(req, res, next) {
 
        const file = req.files.files
        console.log(req.files.files)
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
        file.mv(`public/avatars/` + avatar, function(err) {
            if(err) {
                return next(ApiError.internal('Ошибка сохранения файла'))
            }
        })
        //const saveAvatar = await User.updateOne({_id:decodedToken.id}, {avatar})
        const saveAvatar = await User.findByIdAndUpdate(decodedToken.id, {avatar})
        const fileSave = new Img({path: avatar})

        await fileSave.save()
        return res.json(saveAvatar)
    }

    //  http://localhost:5000/contactor/image/company/:id 
    async getCompanyImage(req, res, next){
 
        const companyId = req.params.id;
        const company = await Company.findById(companyId)
        if(!user){
            return next(ApiError.BadRequestError('Компания не найдена'))
        }

        const img = await Img.findOne({path: company.img})
    
        if(!img){
            return res.sendFile(path.join(__dirname, '../public/companies', 'default.jpeg'))
        }
        return res.sendFile(path.join(__dirname, '../public/companies', company.img))
    }

    //  http://localhost:5000/contactor/image/uploadCompany
    async uploadCompany(req, res, next) {

        const file = req.files.files
        console.log(req.files.files)
        const {companyId} = req.body
        const company = await Company.findById(companyId)
        if(!company){
        return next(ApiError.BadRequestError('Компания не найдена'))
        }
        if(!file) {
        return next(ApiError.BadRequestError('Файлы отсутствуют'))
        }
        const type = file.name.split('.').pop()
        const image = companyId + '.' + type
        file.mv(`public/companies/` + image, function(err) {
        if(err) {
            return next(ApiError.internal('Ошибка сохранения файла'))
        }
        })
        //const saveAvatar = await User.updateOne({_id:decodedToken.id}, {avatar})
        const saveImage = await Company.findByIdAndUpdate(companyId, {img:image})
        const fileSave = new Img({path: image})

        await fileSave.save()
        return res.json(saveImage)
    }
}

module.exports = new ImgController();