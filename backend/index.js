
const express = require("express");
const mongoconnect = require("./db")
const createuser = require('./routes/Createuser')
const app = express();

const bodyParser = require("body-parser")
const expressValidator = require('express-validator');
const port = 5000;
mongoconnect();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
        next();
    })
  


    app.use('/api' ,createuser)
    app.listen(port, ()=>{
        console.log("server has successfully started")
        console.log("chal rha hai lagta hai par result nhi aa rha")
        
    })