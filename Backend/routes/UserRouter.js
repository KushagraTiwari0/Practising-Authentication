const express=require("express")
const UserModel=require("../models/UserModel")
const bcrypt=require("bcrypt")
const UserRouter=express.Router()

UserRouter.post("/signUp",async(req,res)=>{
    const {username,email,password}=req.body
    
    try {
        bcrypt.hash(password,10,async(err,hash)=>{
            if(err)
            {
                return res.status(403).json({message:err.message})       
            }
            const newUser=UserModel.create({username,email,password:hash})
            res.status(201).json({message:"User registered Successfully"})
            console.log(req.body)
        })
    } catch (error) {
        req.status(500).json({message:error.message})
    }
})


UserRouter.post("/login",async(req,res)=>{
    const {email, password}=req.body

    try {
        const ExistingUser=await UserModel.findOne({email})
        if(ExistingUser)
        {
            bcrypt.compare(password,ExistingUser.password,(err,result)=>{
                if(result)
                {
                    res.status(200).json({message:"User Logged in Successfully"})
                }
                else{
                    res.status(401).json({message:"Wrong Password"})
                }
            })
        }
        else{
            res.status(403).json({messgae:"User not registered, Please register"})
        }
    } catch (error) {
        req.status(500).json({message:error.message})
        
    }
})



module.exports =UserRouter