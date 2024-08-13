const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Users").then(
    ()=>{
        console.log("connection to the database is successfull  ")
    }
).catch(
    (e)=>{
        console.log(e);
    }
);
