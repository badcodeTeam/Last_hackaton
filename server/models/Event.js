const {Schema, model} = require('mongoose')
 
const Event = new Schema({
    eventName: {type: String, required: true},                  //Название мероприятия
    eventLink: {type: String, required: true},                  //Ссылка на ивент для активации
    counter: {type:Number, default: "0"},                       //Счетчик посетителей
    eventCreator: {type: Schema.Types.ObjectId, ref: 'User'},   //Создатель мероприятия
    dateStart:{type: String},                                   //Начало мероприятия
    dateEnd:{type: String},                                     //Конец мероприятия
    description:{type: String},                                 //Описание
    img: {type: String}                                         //Картинка организации
})

module.exports= model('Event', Event)