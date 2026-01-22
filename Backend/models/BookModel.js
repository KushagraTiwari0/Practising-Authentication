const mongoose=require("mongoose")
const BookSchema=require("../models/BookSchema")

const BookModel=mongoose.model("Books-Library",BookSchema)
module.exports=BookModel
