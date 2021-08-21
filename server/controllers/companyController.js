const CompanyService = require('../services/companyService')
const PostService = require('../services/postService')
const ApiError = require('../handler/apiError')

class CompanyController {
    
    //  http://localhost:5000/contactor/company/getCompanyInfo/:id
    async getCompanyInfo (req, res, next) {
        try {
            const companyId = req.params.id;
            const companyData = await CompanyService.getCompanyInfo(companyId)
            const companyPosts = await PostService.getCompanyPosts(companyData.companyName)
            if(!companyPosts) {
                return res.json(companyData)
            }
            return res.json(companyData, companyPosts)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/contactor/company/addCompany
    async addCompany (req, res, next) {
        try{
            console.log(req.body)
            const {ownerId,companyName, entrepreneur, direction, building, floor} = req.body
            const createCompany = await CompanyService.addCompany(ownerId, companyName, entrepreneur, direction, building, floor)
            return res.json(createCompany)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/contactor/company/updateCompany
    async updateCompany(req, res, next) {
        try{
            const {companyId, companyName,companyEmail,companyNumber,scheduleStart,scheduleEnd,description,site} = req.body
            const companyUpdate = await CompanyService.updateCompany(companyId, companyName,companyEmail,companyNumber,scheduleStart,scheduleEnd,description,site)
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

    //  http://localhost:5000/contactor/company/addMember
    async addMember (req, res, next) {
        try{
            const {companyId, userId, role} = req.body
            const addMember = await CompanyService.addMember(companyId, userId, role)
            return res.json(addMember)
        } catch (e) {
            next(e)
        }
    }

        //  http://localhost:5000/contactor/company/deleteMember
        async deleteMember (req, res, next) {
            try {
                const {companyId, userId} = req.body
                const deleteMember = await CompanyService.deleteMember(companyId, userId)
                return res.status(200).json({"message":"Данные обновляются"})
            } catch (e) {
                next(e)
            }
        }
}

module.exports = new CompanyController();