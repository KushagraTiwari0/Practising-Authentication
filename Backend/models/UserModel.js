const mongoose=require("mongoose")
const UserSchema = require("./UserSchema")
const UserModel=mongoose.model("Users",UserSchema)

module.exports=UserModel