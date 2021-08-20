const {Schema, model} = require('mongoose')

const User = new Schema({
    email: {type:String, unique:true, required:true},       //Email
    password: {type:String, required:true},                 //Пароль
    //name: {type: String, required:true},                  //ФИО
    //role: {type:Number, required:true, default: "1"},     //Роль
    isActivated: {type:Boolean, default: false},            //Статус активации
    activationLink: {type: String},                         //Ссылка на активацию
    avatar: {type: String},     
    //companyName: {type:String, required:true}             //Имя компании 
})

module.exports = model('User', User)