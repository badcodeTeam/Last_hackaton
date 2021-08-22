const ticketService = require('../services/ticketService')
const ApiError = require('../handler/apiError')



class TicketController {
    
        //  http://localhost:5000/contactor/ticket/addTicket
        async addTicket (req, res, next) {
            try {
                console.log(req.body)
                const {legalName, inn, kpp, ogrn, legalAdress, name, email, number,type} = req.body
                console.log(legalName, inn, kpp, ogrn, legalAdress, name, email, number,type)
                const createTicket = await ticketService.addTicket(legalName, inn, kpp, ogrn, legalAdress, name, email, number,type)
                return res.json(createTicket)
            } catch (e) {
                next(e)
            }
        }

        //  http://localhost:5000/contactor/ticket/getTickets
        async getTickets (req, res, next) {
            try {
                const allTickets = await ticketService.getTickets()
                return res.json(allTickets)
            } catch (e) {   
                next(e)
            }
        }

        //  http://localhost:5000/contactor/ticket/getTicket/:id
        async getTicketsById (req, res, next) {
            try {
                const ticketId = req.params.id;
                const ticket = await ticketService.getTicketsById(ticketId)
                return res.json(ticket)
            } catch (e) {   
                next(e)
            }
        }
}

module.exports = new TicketController();
