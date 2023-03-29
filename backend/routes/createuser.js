const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../model/users");

const bcrypt = require("bcrypt");
const { getSpaceUntilMaxLength } = require("@testing-library/user-event/dist/utils");
  router.post("/createUser"
  ,[
    body("name").isLength({min:2}),
    body("email").isEmail(),
    body("password").isLength({min:6})
  ]
  , async (req , res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password,salt);
  try{ 
    console.log(req.body.name , req.body.email)
      await User.create({
          name:req.body.name,
          email:req.body.email,
          password:secpassword
      })
      res.json({success:true}) 
  }
  catch(error){
    console.log(error)
    res.json({success:false}) 
  }
  })
  router.post("/loginUser"
  ,[
 
    body("email").isEmail(),
    body("password").isLength({min:6})
  ]
  , async (req , res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
  try{ 
   
      let userdata = await User.findOne({email})
      if(!userdata){
        return res.status(400).json({error : "enter correct email",
                                    Message:"enter  valid email" ,
                                  success:false}
                                    );
      } 
      if(! (req.body.password === userdata.password)){
        
        return res.status(400).json({error : "enter correct password" ,
                                      Message : "password is worong",
                                      success:false});
      }
           
      return res.json({success:true});
  }
  catch(error){
    console.log(error)
    res.json({success:false}) 
  }
  })
module.exports =router;