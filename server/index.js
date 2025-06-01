const express=require("express");
const cors=require("cors");
require("./DB");
const AuthRoutes=require("./Router/AuthRoute");

const app=express();

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(express.json());

const PORT=8080;
app.get("/",(req,res)=>{
    console.log("hii from 8080");
    res.send("hello");
});

app.use("/api",AuthRoutes);

app.listen(PORT,()=>{
    console.log("app is running");
})