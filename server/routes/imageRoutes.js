const Router = require('express');
const router = new Router();

const imageController = require('../controllers/imageController')

//  http://localhost:5000/contactor/image/user/:id 
router.get('/user/:id', imageController.getUserImage)

//  http://localhost:5000/contactor/image/uploadAvatar
router.put('/uploadAvatar', imageController.uploadAvatar)

//  http://localhost:5000/contactor/image/company/:id
router.get('/company/:id', imageController.getCompanyImage)

//  http://localhost:5000/contactor/image/uploadCompany
router.put('/uploadCompany', imageController.uploadCompany)

module.exports = router