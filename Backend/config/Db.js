// const mongoose =require("mongoose")
// require("dotenv").config()

// const connectDB=mongoose.connect(process.env.MongoDB_URI)

// module.exports=connectDB

const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDb;
