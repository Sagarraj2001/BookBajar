const jwt=require("jsonwebtoken");

const verify=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"invalid user !"});
    }
    else{
        jwt.verify(token,process.env.USER_KEY,(err,decoded)=>{
            if(err){
                return res.status(401).json({message:"invalid token"});
            }
            else{
                req.email=decoded.email
                next()
            }
        })
    }
};

module.exports=verify;