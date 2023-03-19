
const express = require("express");
const mongoconnect = require("./db")
const createuser = require('./routes/Createuser')
const app = express();

const port = 5000;

mongoconnect();


 app.use(express.json())
app.use('/api' ,createuser)
app.listen(port, ()=>{
    console.log("server has successfully started")
    console.log("chal rha hai lagta hai par result nhi aa rha")
    
})