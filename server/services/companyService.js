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
            return company
        } catch (e) {
            return e
        }
    }

    async addCompany(ownerId, companyName, entrepreneur, direction, building, floor) {
        try {
            const user = await User.findById(ownerId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const createCompany = await Company.create({companyName, owner:ownerId, entrepreneur, direction, building, floor})
            const addRole = await User.findByIdAndUpdate(ownerId,{role:3})
            return {createCompany}
        } catch (e) {
            return e
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
            return e
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
            return e
        }
    }

    async addMember(companyId, userId, role) {
        try {
            const user = await User.findById(userId)
            if(!user){
                throw ApiError.BadRequestError('Пользователь не был найден')
            }
            const addMember = await Company.findByIdAndUpdate(companyId, {$push: { members:userId }}) 
            const addRole = await User.findByIdAndUpdate(userId,{role})
            return {addMember}
        } catch (e) {
            return e
        }
    }

    async deleteMember(companyId, userId) {
        try {
            const deleteMember = await Company.findByIdAndDelete(companyId, {members:userId})
            const updateRole = await User.findByIdAndUpdate(userId,{role:1})
            if (!deleteMember) {
                return next(ApiError.badRequest('Ошибка удаления чата'))
            }
            return {deleteMember}
        } catch (e) {
            return e
        }
    }
}

module.exports = new CompanyService();
