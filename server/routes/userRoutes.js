const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')


//  http://localhost:5000/contactor/user/getClientInfo/:id
router.get('/getClientInfo/:id', userController.getClientInfo)

//  http://localhost:5000/contactor/user/updateEmailNumber
router.post('/updateEmailNumber', userController.updateEmailNumber)

module.exports = router