const AuthModel = require("../Model/AuthModel");
const bp = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, mob, password } = req.body;
        if (!email || !name || !password || !mob) {
            return res.status(401).json({ message: "Data is missing or give all data " });
        }
        const existingUser = await AuthModel.findOne({ $or: [{ name }, { email }, { mob }] })
        if (existingUser) {
            return res.status(400).json({ message: "user alraedy exist" });
        }
        const hashPassword = await bp.hash(password, 10);
        await new AuthModel({ name, email, mob, password: hashPassword }).save();
        return res.status(201).json({ message: "User Account created successfully" });
    }
    catch (err) {
        return res.status(501).json({ message: err.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "fill all required" });
        }
        const user = await AuthModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "user not registered please register" });
        }
        const validPassword = await bp.compare(password, user.password);
        if (!validPassword) {
            return res.json({ message: "wrong password" });
        }
        const token = jwt.sign({ email: user.email }, process.env.USER_KEY);
        res.cookie('token', token, { httpOnly: true, secure: true });
        return res.json({ login: true });
    }
    catch(err){
        return res.status(501).json({message:err.message});
    }
}

