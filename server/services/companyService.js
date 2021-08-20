const User = require('../models/User')
const Company = require('../models/Company')
const ApiError = require('../handler/apiError')
const ClientDto = require('../dtos/clientDto')

class CompanyService {

    async getCompanyInfo(companyId) {

    }

    async addCompany(userId, companyName) {
        try {
            const user = await User.findById(userId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createCompany = await Company.create({companyName, owner:userId})
            return {createCompany}
        } catch (e) {
            return null
        }
    }
}

module.exports = new CompanyService();

// ----------------------------------------------------------------
//getAllCompany
//updateCompany(name)
//Добавить график работы