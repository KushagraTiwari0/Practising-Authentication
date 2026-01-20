// const express=require('express')
// const { connect } = require('http2')
// require("dotenv").config()
// const path=require('path')
// const app=express()
// const PORT=process.env.PORT||8080

// const connectDb=require("./config/Db")
// const { error } = require('console')



// const file=path.join(__dirname,"../Frontend");
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(file,"index.html"));
// })




// app.listen(PORT,async(req,res)=>{
//   try{
//     await connectDb()
//     console.log(process.env.MONGO_URI);
//       console.log(`Server running on Port ${PORT} and Databse is connected`)
//   }
//   catch (eroor){
//     console.log(error.message)
//   }
// })

const express = require("express");
require("dotenv").config();
const path = require("path");

const connectDb = require("./config/Db");
const UserRouter= require("./routes/UserRouter")

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Frontend path
const frontendPath = path.join(__dirname, "../Frontend");
app.use(express.static(frontendPath));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.use("/user",UserRouter)


// Start server ONLY after DB connection
const startServer = async () => {
  try {
    await connectDb();
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start failed:", error.message);
  }
};

startServer();
