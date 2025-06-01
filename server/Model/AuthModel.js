const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        mob:{
            type:Number,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

const AuthModel = mongoose.model("Authentication", AuthSchema);

module.exports = AuthModel;