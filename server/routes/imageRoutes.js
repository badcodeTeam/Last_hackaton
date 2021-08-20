const Router = require('express');
const router = new Router();

const imageController = require('../controllers/imageController')
 
router.get('/user/:id', imageController.getUserImage)
router.post('/uploadAvatar', imageController.uploadAvatar)

module.exports = router