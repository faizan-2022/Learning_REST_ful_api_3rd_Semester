const express = require("express");
const app = express();
const testRoute = require("./routes/Postfix");


app.use(express.json());
app.use("/api/practices", testRoute);

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Stack first server is running!")
})