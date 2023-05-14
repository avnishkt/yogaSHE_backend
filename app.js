const express = require("express")
const app =express()
app.use(express.json());
app.use(express.json());

const candidateRout=require('./router/router')
const {sendToken,reciveToken}=require('./controller/jwt')
const port=process.env.PORT || 8001

const connectDatabase= require('./config/db');
connectDatabase();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.urlencoded({extended:false}));
const Register = require('./model/candidateModel');




const path =require('path');
const sendEmail = require("./controller/sendmail");
// const { sendToken } = require("./controller/jwt");rs


app.use('/',candidateRout);







app.listen(port,()=>{
    console.log("server is running AT PORT NUM 8000")
})