const {Schema, model} = require('mongoose')
 
const Chat = new Schema({
    chatName: {type: String, required: true},   
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
})

module.exports= model('Chat', Chat)