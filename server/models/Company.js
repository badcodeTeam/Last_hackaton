const {Schema, model} = require('mongoose')

const Company = new Schema({

    companyName: {type:String, unique:true, required:true}, //Название организации
    owner: {type: Schema.Types.ObjectId, ref: 'User'},      //Владелец
    entrepreneur: {type: String},                           //ИП
    img: {type: String},                                    //Картинка организации
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],  //Участники
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],    //Посты компании
    companyEmail:{type: String},                            //Email компании
    companyNumber:{type: String},                           //Номер компании
    scheduleStart:{type: String},                           //Начало рабочего дня
    scheduleEnd: {type: String},                            //Окончания рабочего дня
    description: {type: String},                            //Описание
    direction:{type: String},                               //Направление работы
    building: {type: Number},                               //Здание
    floor: {type: Number},                                  //Этаж
    site: {type: String, default: "http://localhost:3000"}  //Сайт                              
})

module.exports = model('Company', Company)