const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = () => {
  return mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true ,useNewUrlParser:true},
    
).then((res) => {
    console.log("Connected");
})
.catch((err) =>{
    console.log("not connected",err);
})
}

module.exports = connectDatabase;
