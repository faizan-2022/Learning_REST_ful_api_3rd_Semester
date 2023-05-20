const express = require("express");
const app = express();
const array2droute = require("./routes/2-D_Array")

app.use(express.json());
app.use("/api4/practices", array2droute);


app.listen(process.env.PORT || 8083, ()=>{
    console.log("2-D Array server is running!");
});