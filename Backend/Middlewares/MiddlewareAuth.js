const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=async(req,res,next)=>{
    const token=req.header.authorization.split(" ")[1];
    console.log(token);
    try {
        if(token)
        {
            jwt.verify(token,process.env.SECURITY_KEY,function(err,decoded){
                console.log(decoded.foo)
                next();
            });
        }
        else
        {
            res.status(401).json({message:"Token not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports=auth