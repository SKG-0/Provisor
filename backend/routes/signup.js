const express=require('express');
const router=express.Router();
const cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const signup=require('../models/Signup');
router.use(cors());
process.env.SECRET_KEY='secret'
router.post('/',(req,res)=>{
    const signup_user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        option:req.body.option,
        domain:'',
        experience:0,
        fee:0
    }
    signup.findOne({
        email:req.body.email
    }).then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                signup_user.password=hash
                signup.create(signup_user)
                .then(user=>{
                    res.send({error:'',signup_user});
                })
                .catch(err=>{
                    res.send('error '+err)
                })
            })
        }
        else{
            res.json({error:'User already exists'})
        }
    }).catch(err=>{
        res.send('error '+err)
    })
})
module.exports=router
