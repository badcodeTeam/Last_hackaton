const {Schema, model} = require('mongoose')

const Ticket = new Schema({
    legalNmae: {type:String},                               
    inn: {type:String},                                    
    kpp: {type:String},     
    legalAdress:{type:String},
    legalAdress:{type:String},
    name: {type:String},
    email:{type:String},
    number:{type:String},    
    type: {type:String},                  
})

module.exports = model('Ticket', Ticket)