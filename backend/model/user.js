const mongoose = require("mongoose")
const schema = new mongoose.schema
const Userschema = new schema({
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
    passward:{
        type:String,
        required: true
    }

},{ timestamps:true})
module.exports = mongoose.model('user', Userschema);