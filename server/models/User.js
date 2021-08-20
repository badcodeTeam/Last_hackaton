const {Schema, model} = require('mongoose')

const User = new Schema({
    email: {type:String, unique:true, required:true},       //Email
    password: {type:String, required:true},                 //Пароль
    name: {type: String},                                   //ФИО
    role: {type:Number, default: "1"},                      //Роль
    position: {type: String},                               //Должность
    isActivated: {type:Boolean, default: false},            //Статус активации
    activationLink: {type: String},                         //Ссылка на активацию
    avatar: {type: String},                                 //Аватарка
    companyName: {type:String},                             //Имя компании 
    number: {type:String}                                   //Номер для связи
})

module.exports = model('User', User)