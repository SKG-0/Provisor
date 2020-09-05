const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
  name: {
    type: String,
    required: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  option: {
    required: true,
    type: String,
  },
  domain:{
    type:String
  },
  experience:{
    type:Number
  },
  fee:{
    type:Number
  }
});
module.exports=Signup=mongoose.model('Signup',SignupSchema);