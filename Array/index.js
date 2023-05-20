const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const arrayRoute = require("./routes/array");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=>{
    console.log("DB Connection Successful");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use("/api1/practices", arrayRoute);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Array server is running");
})