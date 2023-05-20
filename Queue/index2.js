const express = require("express");
const app = express();
const test2route = require("./routes/Queue");


app.use(express.json());
app.use("/api2/practices", test2route);

app.listen(process.env.PORT || 8081, ()=>{
    console.log("Queue is running!");
})