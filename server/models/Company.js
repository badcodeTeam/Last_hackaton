const {Schema, model} = require('mongoose')

const Company = new Schema({

    companyName: {type:String, unique:true, required:true}, //Название организации
    owner: {type: Schema.Types.ObjectId, ref: 'User'},      //Владелец
    img: {type: String},                                    //Картинка организации
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],  //Участники
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],    //Посты компании
    companyEmail:{type: String},                            //Email компании
    companyNumber:{type: String},                           //Номер компании
    schedule:{type: String}                                 //График работы
})

module.exports = model('Company', Company)