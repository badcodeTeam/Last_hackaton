const CompanyService = require('../services/companyService')
const ApiError = require('../handler/apiError')

class CompanyController {
    
    //  http://localhost:5000/contactor/company/getCompanyInfo/:id
    async getCompanyInfo (req, res, next) {
        try {
            const companyId = req.params.id;
            const companyData = await CompanyService.getCompanyInfo(companyId)
            return res.json(companyData)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/contactor/company/addCompany
    async addCompany (req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decodedToken = jwt.verify(token, process.env.SECRET)
            const {companyName} = req.body
            const createCompany = await CompanyService.addCompany(decodedToken.id, companyName)
            return res.json(createCompany)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/contactor/company/updateCompany
    async updateCompany(req, res, next) {
        try{
            const {companyId, companyName,companyEmail,companyNumber,schedule} = req.body
            const companyUpdate = await CompanyService.updateCompany(companyId, companyName,companyEmail,companyNumber,schedule)
            return res.json(companyUpdate)
        } catch(e){
            next(e)
        }
    }

    //  http://localhost:5000/contactor/company/getAllCompanies
    async getAllCompanies(req, res, next) {
        try{
            const allCompaniesData = await CompanyService.getAllCompanies()
            return res.json(allCompaniesData)
        } catch(e){
            next(e)
        }
    }
}

module.exports = new CompanyController();