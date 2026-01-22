const express=require("express")
const BookModel=require("../models/BookModel")
const BookRouter=express.Router()

BookRouter.get('/',async(req,res)=>{
    try {
        const books=await BookModel.find()
        res.status(200).json({message:"All books found",books})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

BookRouter.post('/add',async(req,res)=>{
    try {
        const newBook=await BookModel.create(req.body)
        res.status(201).json({message:"Book Added",newBook})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports=BookRouter