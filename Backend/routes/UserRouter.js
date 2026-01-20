const express=require("express")
const UserModel=require("../models/UserModel")
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
        })
    } catch (error) {
        req.status(500).json({message:error.message})
    }
})

module.exports =UserRouter