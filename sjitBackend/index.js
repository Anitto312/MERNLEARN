const express = require("express");
const mdb = require('mongoose');
const dotenv = require('dotenv');
const bcrypt =require('bcrypt');
const Signup = require('./models/signupSchema.js')

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
    res.sendFile("C://Users//anitt//OneDrive//Desktop//Mern//index.html")
})

app.post("/signup",async(req,res) =>{
    try{
        console.log(req.body);
        const {firstName,lastName,email,password,phoneNumber} = req.body
        const hashPassword= await bcrypt.hash(password,10)
        const newSignup = new Signup({
            firstName:firstName,
            lastName:lastName, 
            email:email,
            password:hashPassword,
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
app.get('/getsignupdet',async(req,res)=>{
    const signup=await Signup.find()
    console.log(signup)
    res.send("fetched")
})
app.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existinguser=await Signup.findOne({email:email})
        console.log(existinguser);
        if(existinguser){
            const isValidPassword=await bcrypt.compare(password,existinguser.password)
            console.log(isValidPassword);
            if(isValidPassword){
                res.status(201).json({message:"success",isLoggedIn:true})
            }
            else{
                res.status(201).json({message:"success",isLoggedIn:false})
            }
        }
        else{
            res.status(201).json({message:"success",isLoggedIn:false})
        }
    }
    catch(err){
        console.log("Login error");  
        res.status(201).json({message:"Login error",isLoggedIn : false})
    }

})

app.listen(PORT, () => console.log("Server Started successfully.",PORT));