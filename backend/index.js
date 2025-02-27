require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.dotenv.MONGO_URI,{
    useUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to mongo"))
.catch(err=>console.log("Could.t connect to mongo"));

app.listen("5000", ()=>{
    console.log("server is running at http://localhost:5000")
});