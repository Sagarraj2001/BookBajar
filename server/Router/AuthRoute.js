const { verify } = require("jsonwebtoken");
const {register, login}=require("../Controller/AuthController");
const express=require("express");

const router=express.Router();

router.post("/signup",register);
router.get("/login",verify,login);

module.exports=router;