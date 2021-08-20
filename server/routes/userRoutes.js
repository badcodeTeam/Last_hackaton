const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')


//  http://localhost:5000/contactor/user/getClientInfo
router.get('/getClientInfo/:id', userController.getClientInfo)

//  router.post('/', userController)

module.exports = router