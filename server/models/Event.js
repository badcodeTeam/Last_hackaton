const {Schema, model} = require('mongoose')
 
const Event = new Schema({
    eventName: {type: String, required: true},    //Название мероприятия

})

module.exports= model('Event', Event)