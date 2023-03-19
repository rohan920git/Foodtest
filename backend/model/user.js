const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Userschema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }

},{ timestamps:true})
module.exports = mongoose.model('user', Userschema);