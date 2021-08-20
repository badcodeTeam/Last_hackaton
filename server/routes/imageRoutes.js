const Router = require('express');
const router = new Router();

const imageController = require('../controllers/imageController')
 
router.get('/user/:id', imageController.getUserImage)
router.put('/uploadAvatar', imageController.uploadAvatar)

module.exports = router