const router = require("express").Router();

const {candidateRegister,candidateLogin}= require('C:/Users/avnis/OneDrive/Desktop/BACKEND-PRACTICE/register/controller/candidate.js')
console.log('./controller/candidate')
console.log(candidateRegister)
router.post('/register_f',candidateRegister);
router.post('/login',candidateLogin);

module.exports= router;