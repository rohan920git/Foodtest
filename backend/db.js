const mongoose = require("mongoose");
const url = "mongodb+srv://rohan:rohanb158@cluster0.35or8u3.mongodb.net/foodtestmern?retryWrites=true&w=majority"
const  mongodb =async()=>{
 await mongoose.connect(url).then(
    console.log("connected successfully")
).catch((err)=>{
    console.log('error' + err);
}
    
) 
}
module.exports=mongodb;
