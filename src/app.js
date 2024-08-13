const express = require ("express");
const path = require("path");
const app = express();
require("./db/conn");
const User = require("./models/registration")

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname , "../Public")
// console.log(staticPath)

app.use(express.static(staticPath));
const viewsPath = path.join(__dirname, "../views");
console.log(viewsPath);
app.set("view engine" , "hbs");
// app.set("view engine" , viewsPath);

app.use(express.urlencoded({extended : false}));


app.get("/" , (req , res) =>{
    res.render("index");
})


app.post("/register" , async (req , res)=>{
    try {
        // const {name, phone} = req.body;
        const firstUser = new  User({
            name : req.body.name,
            phone : req.body.phone,
            gmail : req.body.gmail,
            password : req.body.password,
        })

        const userData = await firstUser.save();
        res.send(userData);
        // res.status(200).json()
        console.log(userData)
    } catch (error) {
        res.send(error);
    }
})

app.listen(port , ()=>{
    console.log(`listening at port number ${port}`);
})