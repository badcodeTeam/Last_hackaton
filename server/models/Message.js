const {Schema, model} = require('mongoose')
 
const Message = new Schema({
    chatId: {type: Schema.Types.ObjectId, ref: 'Chat'},
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    authorId: {type: Schema.Types.ObjectId, ref: 'User'},  
    text : {type: String, required: true}
})

module.exports= model('Message', Message)