const {Schema, model} = require('mongoose')
 
const Image = new Schema({
    path: {type: String, required: true}
})
 
module.exports= model('Image', Image)