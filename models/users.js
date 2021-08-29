const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    sockId:{
        type:String,
    },
    friends:[],
    active:{
        isActive: Boolean,
        lastActive: {type: Date,default: Date.now}
    }
})

const Users = mongoose.model('user',userSchema);

module.exports = Users;