const express=require('express');
const router=express.Router();
const signup=require('../models/Signup');
router.post(`/consultant/:id`,(req,res)=>{
    const id=req.params.id;
    console.log(req.body);
    signup.findByIdAndUpdate({_id:id},{
        domain:req.body.domain,
        fee:req.body.fee,
        experience:req.body.experience
    },function(err,result){
        if(result){
            signup.findById(id).then(user=>{
                res.send(user);
            }).catch(err=>{
                res.send(err);
                console.log(err)
            })
        }
        else{
            res.send("Some error occured");
        }
        if(err) throw err;
    })
})
module.exports=router