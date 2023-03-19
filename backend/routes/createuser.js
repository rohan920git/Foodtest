const express = require("express")
const router = express.Router()
const user = require("../model/User")
router.get('/data', async (req ,res)=>{
    res.json({success:true});
    
})
router.post('/createUser' , async (req ,res)=>{
  try{
    await user.create({
        name:"rohan",
        location:"bhopal",
        email:"rohan1@gmail.com",
        password:"1234"
    })
    res.json({success:true});
}catch(err){
    console.log(err);
    res.json({success:false});
  }
})

module.exports = router;