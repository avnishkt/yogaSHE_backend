const mongoose=require('mongoose');

const validator=require('email-validator')
const validateEmail = function(v) {
    return /\S+@akgec\.ac\.in$/.test(v);
  };
const candidateSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
    contact:{
        type:Number,
        required:true,
        unique:true,
        length:[10, "enter the correct number"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validateEmail, 'Email address should be in the format user@akgec.ac.in'],
    },
    gender:{
        type:String,
        required:true,

    },
    branch:{
        type:String,
        required:true,
    },
    studentNo:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    }
})
const Register=new mongoose.model('Candidate',candidateSchema)
module.exports= Register;