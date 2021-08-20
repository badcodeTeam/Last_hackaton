const {Schema, model} = require('mongoose')
 
const Image = new Schema({
    path: {type: String, required: true}    //Путь до картинки
})
 
module.exports= model('Image', Image)