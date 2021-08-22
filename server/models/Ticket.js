const {Schema, model} = require('mongoose')

const Ticket = new Schema({
    legalName: {type:String},                               
    inn: {type:String},                                    
    kpp: {type:String},     
    ogrn: {type:String}, 
    legalAdress:{type:String},
    name: {type:String},
    email:{type:String},
    number:{type:String},    
    type: {type:String},                  
})

module.exports = model('Ticket', Ticket)