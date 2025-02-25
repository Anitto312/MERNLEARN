const express = require("express");
const mdb = require('mongoose');
const dotenv = require('dotenv')
const Signup = require('./models/signupSchema')

const app = express();
app.use(express.json())
const PORT = 3127;
dotenv.config()

console.log(process.env.MONGODB_URL)

mdb.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongo DB connection successfull")
}).catch((err) => {
    console.log("Check your connection string",err)
})

app.get("/static",(req,res) => {
    res.sendFile("C:\Users\anitt\OneDrive\Desktop\Mern\sjitFrontend\index.html")
})

app.post("/signup",(req,res) =>{
    try{
        console.log(req.body);
        const {firstName,lastName,email,password,phoneNumber} = req.body
        const newSignup = new Signup({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            phoneNumber:phoneNumber,

        })
        newSignup.save()
        console.log("Signup successful")
        res.status(201).json({message:"signup successfull",isSignup : true})
    }
    catch(error){
        console.log(error)
        res.status(201).json({message:"signup unsuccessfull",isSignup : false})
    }
})

app.listen(PORT, () => console.log("Server Started successfully.",PORT));