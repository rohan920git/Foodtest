const mongoose = require("mongoose");
const { find } = require("./model/users");
require("dotenv").config();
const url = process.env.DATABASE_URL;
const  mongodb =async()=>{
 await mongoose.connect(`${process.env.DATABASE_URL}`).then(async ()=>{
    console.log("connected successfully");
    
    
 }).catch((err)=>{
    console.log('error' + err);
}
    
) 
}
module.exports=mongodb;
