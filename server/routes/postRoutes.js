const Router = require('express')
const router = new Router
const postController = require('../controllers/postController')
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//  http://localhost:5000/contactor/post/addPost
router.post('/addPost', postController.addPost)

//  http://localhost:5000/contactor/post/addPostFromCompany
router.post('/addPostFromCompany',postController.addPostFromCompany)

module.exports = router