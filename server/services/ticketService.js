
const Ticket = require('../models/Ticket')
const ApiError = require('../handler/apiError')

class TicketService {

    async addTicket(legalName, inn, kpp, legalAdress, name, email, number,type) {
        try {
            const createTicket = await Ticket.create({legalName, inn, kpp, legalAdress, name, email, number,type})
            return createTicket
        } catch (e) {
            return e
        }
    }

    async getTickets() {
        try {
            const getTickets = await Ticket.find()
            if(!getTickets) {
                throw ApiError.BadRequestError('Нет тикетов')
            }
            return getTickets
        } catch (e) {
            return e
        }
    }

    async getTicketsById(ticketId) {
        try{
            const ticket = await Ticket.findById(ticketId)
            if(!ticket){
                throw ApiError.BadRequestError('Тикет не был найден')
            }
            return ticket
        } catch (e) {
            return e
        }
    }

}

module.exports = new TicketService();