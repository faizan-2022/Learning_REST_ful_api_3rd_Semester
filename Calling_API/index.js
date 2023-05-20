const express = require("express");
const app = express();
const callroute = require("./routes/call");


app.use(express.json());
app.use("/api2/practices", callroute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Stack second server is running!");
})