const express = require("express")
const router = express.Router()
const User = require("../model/User")

const { body , validationResult } = require('express-validator');
router.get('/data', async (req ,res)=>{
    res.json({success:true});
    
})

router.post('/createuser' ,[
 body('email').isEmail(),
 body('password').isLength({ min:4})],
  (req ,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
    }
    try{
   User.create({
        name: req.body.name,
        location: req.body.geolocation,
        email: req.body.email,
        password: req.body.password
    }).then(res.json({success:true}))
    }
    catch (error){
         console.log(error);
         res.json({success:false})
    }
})

module.exports = router;