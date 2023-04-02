const express = require("express")
const mongodb = require("./db")
const route =require("./routes/Createuser");
const Dataroute = require("./routes/DisplayData");
const app = express();
const port = 5000;
mongodb();
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Allow-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    )
    next();
})
app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').json())
app.use(express.json());
app.use("/api" , route);
app.use("/api" , Dataroute);
app.listen(port,()=>{
    console.log("server started");
})