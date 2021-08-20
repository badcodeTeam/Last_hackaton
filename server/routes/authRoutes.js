const Router = require('express')
const router = new Router
const AuthController = require('../controllers/authController')
const {body} = require('express-validator')

//  http://localhost:5000/contactor/authUser/register
router.post('/register',
    body('email').isEmail(),
    body('password').isLength({min:8, max:24}),
    AuthController.register 
)  

//  http://localhost:5000/contactor/authUser/login
router.post('/login', AuthController.login )    

//  http://localhost:5000/contactor/authUser/activate/:link
router.get('/activate/:link', AuthController.activate)

module.exports = router