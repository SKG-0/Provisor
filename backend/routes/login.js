const express=require('express');
const router=express.Router();
const cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const signup=require('../models/Signup');
const { use } = require('./signup');
router.use(cors());
process.env.SECRET_KEY='secret'
router.post('/',(req,res)=>{
    signup.findOne({
        email:req.body.email
    }).then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload={
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    option:user.option
                }
                let token=jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.send(payload);
            }
            else{
                res.json({error:"User Doesn't Exists"})
            }
        }
        else{
            res.json({error:"User Doesn't Exists"})
        }
    })
    .catch(err=>{
        res.send('error '+err);
    })
})
module.exports=router