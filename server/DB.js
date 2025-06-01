const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

const connectDB=async()=>{
    try{
        mongoose.connect(process.env.URL);
        console.log("DataBase is Connected SuccessFully !!");
    }
    catch(err){
        console.log(err);
    }
}

connectDB()