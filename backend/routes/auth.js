const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const router = express.Router();

router.post("/signup", async(req,res)=>{
    try{
        const{username,  email, age, password}= req.body;
        const hasedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, age, hasedpassword});
        await newUser.save();
        res.status(201).json({message : "User registered successfully"});
    }
    catch(error){
        res.status(500).json({message : "Error resgistering the User"});
    }
});

router.post("/logn", async(req,res)=>{
    try{
      const{email, password}=req.body;
      const user = await User.findOne({email});
      if (!User)
        return res.status(400).json({message : "User not found"});
      const isMatch = await bcrypt.compare(passowrd, user.password);
      if(!isMatch)
        return res.status(400).json({message : "Incorrect Password"});
    const token = jwt:sign({userId:user_id},process.env.JWT_SECRET_KEY, {expressIn:"1h"});
    res.json({token, user :{username: user.username, email: user.email}});
    }
    catch(error){
        res.status(500).json({message : "Error loggin in"});
    }
});
module.exports = router;