const express = require("express")
const router = express.Router()
const user = require("../model/User")
const { body, validationResult } = require('express-validator');
router.get('/data', async (req ,res)=>{
    res.json({success:true});
    
})
router.post('/createUser' , 
 // username must be an email
 body('email',"invalid email").isEmail(),
 body('name', "invalid name").isLength({ min: 5 }),
 
 body('password',"invalid password").isLength({ min: 5 }),
async (req ,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ flaws: errors.array() });
    }
  
    try{
    await user.create({
        name:req.body.name,
        location:req.body.location,
        email:req.body.email,
        password:req.body.password
    })
    res.json({success:true});
}catch(err){
    console.log(err);
    res.json({success:false});
  }
})

module.exports = router;