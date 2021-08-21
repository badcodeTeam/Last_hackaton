const User = require('../models/User')
const Company = require('../models/Company')
const ApiError = require('../handler/apiError')

class CompanyService {

    async getCompanyInfo(companyId) {
        try{
            const company = await Company.findById(companyId)
            if(!company){
                throw ApiError.BadRequestError('Компания не была найдена')
            }
            return {company}
        } catch (e) {
            return null
        }

    }

    async addCompany(ownerId, companyName, entrepreneur, direction, building, floor) {
        try {
            const user = await User.findById(userId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createCompany = await Company.create({companyName, owner:ownerId, entrepreneur, direction, building, floor})
            return {createCompany}
        } catch (e) {
            return null
        }
    }

    async updateCompany(companyId, companyName,companyEmail,companyNumber,scheduleStart,scheduleEnd,description,site) {
        try{
            const UpdateCompany = await Company.findByIdAndUpdate(companyId, {companyName,companyEmail,companyNumber,scheduleStart,scheduleEnd,description,site})
            if(!UpdateCompany){
                throw ApiError.BadRequestError('Ошибка обновления')
            }
            return {UpdateCompany}
        } catch(e){
            return null
        }
    }

    async getAllCompanies() {
        try{
            const getAllCompanies = await Company.find()
            if(!getAllCompanies){
                throw ApiError.BadRequestError('Компаний не найдено')
            }
            return {getAllCompanies}
        } catch(e){
            return null
        }
    }
}

module.exports = new CompanyService();
