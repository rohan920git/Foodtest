const express = require("express");
const router = express.Router();
const user = require("../model/users");
router.post("/createuser", async (req , res)=>{
 try{
     await user.create({
        name:"rohan",
        email:"rohanb123",
        password:"234432324"
     })
     res.json({success:true}) 
 }
 catch(error){
   console.log(error)
   res.status(400).json({success:false}) 
}
})
module.exports =router;