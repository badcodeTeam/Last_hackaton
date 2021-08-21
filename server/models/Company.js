const {Schema, model} = require('mongoose')

const Company = new Schema({

    companyName: {type:String, unique:true, required:true}, //Название организации
    owner: {type: Schema.Types.ObjectId, ref: 'User'},      //Владелец
    img: {type: String},                                    //Картинка организации
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],  //Участники
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],    //Посты компании
    companyEmail:{type: String},                            //Email компании
    companyNumber:{type: String},                           //Номер компании
    scheduleStart:{type: String},
    scheduleEnd: {type: String},
    description: {type: String},
    building: {type: Number},
    floor: {type: Number},
    site: {type: String, default: "http://localhost:3000"}                                 
})

module.exports = model('Company', Company)