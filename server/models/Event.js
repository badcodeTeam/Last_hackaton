const {Schema, model} = require('mongoose')
 
const Event = new Schema({
    eventName: {type: String, required: true},    //Название мероприятия
    eventLink: {type: String, required: true}
})

module.exports= model('Event', Event)