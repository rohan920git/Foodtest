const express = require("express")
const mongodb = require("./db")

const app = express();
const port = 5000;
mongodb();

app.use(express.json);
app.use("/api" , require("./routes/Createuser"));
app.listen(port,()=>{
    console.log("server started");
})