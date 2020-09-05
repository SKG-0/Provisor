const express=require('express');
const router=express.Router();
const signup=require('../models/Signup');
router.post('/',(req,res)=>{
    signup.find({domain:req.body.opt}).then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    })
})
module.exports=router