const express = require("express");
const app =express();
const mongoose =require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



app.listen(5000,()=>{
    console.log("Server started on 5000");
}) 

//router
const infoRouter =require("./router");
app.use("/info",infoRouter);

// //db connections
mongoose.connect("mongodb://localhost/tutorial",{useNewUrlParser: true, useUnifiedTopology:true},(err)=>{
    if(!err)
    {
        console.log("DB connected successfully");
    }
})