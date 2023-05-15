const mongoose = require('mongoose');
const validator = require('validator');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
    length: [10, "Enter the correct number"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v);
      },
      message: 'Email address should be in a valid format',
    },
  },
  gender: {
    type: String,
    // required: true,
  },
  branch: {
    type: String,
    // required: true,
  },
  studentNo: {
    type: Number,
    // required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Register = mongoose.model('Candidate', candidateSchema);
module.exports = Register;
