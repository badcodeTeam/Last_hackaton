const {Schema, model} = require('mongoose')

const Post = new Schema({
    postHeader: {type:String, unique:true, required:true},  //Заголовок
    text: {type:String},                                    //Текст
    author: {type: Schema.Types.ObjectId, ref: 'User'},     //Автор
    date : { type: DataTypes.DATE, required: true}          //Дата
})

module.exports = model('Post', Post)