const Register = require('../model/candidateModel')
const bcrypt = require('bcrypt');
const sendEmail= require("./sendmail")
const saltRounds = 10;
const candidateRegister =async(req,res)=>{

  try{
    const salt = await bcrypt.genSalt(saltRounds);

   const hash= await bcrypt.hash(req.body.password, salt);

  
   
    const candidateData = await new  Register({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      gender: req.body.gender,
      branch: req.body.branch,
      studentNo: req.body.studentNo,
      password: hash // send hashed password
    });
  
  
  const postData =await candidateData.save().then()
  {
    const email=req.body.email;
sendEmail(email);
  }
res.send('<h1>registration successfull</h1>') ;

    }catch(error)
    {
      console.log(error);
      res.send('registration failed ')
    }
  
  
  };
  const candidateLogin = async(req,res)=>{

    try
    {const email = req.body.email;
    
      const user= await Register.findOne({email})
      if(!user)
    {
      console.log("found")
      return res.send("authentication failed");

    }
    const match=await bcrypt.compare(req.body.password,user.password);
    if (match) {
      // Set the user's session
      // Redirect to the home page
      return res.redirect('/home');
    } else {
      return res.render('login', { error: 'Authentication failed' });
    }
  } catch (error) {
    console.error(error);
    return res.render('login', { error: 'Something went wrong' });
  }


  } 
  module.exports={candidateRegister,candidateLogin}
  