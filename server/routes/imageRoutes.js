const Router = require('express');
const router = new Router();

const imageController = require('../controllers/imageController')

//  http://localhost:5000/contactor/image/user/:id 
router.get('/user/:id', imageController.getUserImage)

//  http://localhost:5000/contactor/image/uploadAvatar
router.put('/uploadAvatar', imageController.uploadAvatar)

module.exports = router