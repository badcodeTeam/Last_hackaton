const Router = require('express')
const router = new Router
const companyController = require('../controllers/companyController')

//  http://localhost:5000/contactor/company/getCompanyInfo/:id
router.get('/getCompanyInfo/:id', companyController.getCompanyInfo)

//  http://localhost:5000/contactor/company/addCompany
router.post('/addCompany', companyController.addCompany)

//  http://localhost:5000/contactor/company/updateCompany
router.post('/updateCompany', companyController.updateCompany)

//  http://localhost:5000/contactor/company/getAllCompanies
router.get('/getAllCompanies', companyController.getAllCompanies)

module.exports = router