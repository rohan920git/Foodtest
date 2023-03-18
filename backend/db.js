const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://rohan:rohanb158@cluster0.35or8u3.mongodb.net/foodtestmern?retryWrites=true&w=majority";
const mongoconnect= async() => {
await mongoose.connect(mongoURI,{useNewUrlParser:true}).then( async()=>{
    console.log("connection established")
    const fData =  await mongoose.connection.db.collection("fooditem");
    fData.find({}).toArray(( err,data)=>{
         console.log(data);
    })
    console.log("pohoch gaya");
    console.log("pohoch gaya");
})
.catch(
    (err) => {
        console.log(err);
    }
)

    
    } 
module.exports = mongoconnect;