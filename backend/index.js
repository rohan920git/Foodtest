const express = require("express");
const mongoconnect = require("./db")
const app = express();

const port = 5000;

mongoconnect();
app.get("/",(req,res)=>{
    res.send("hellobeta")
})
app.listen(port, ()=>{
    console.log("server has successfully started")
    console.log("chal rha hai lagta hai par result nhi aa rha")
    
})