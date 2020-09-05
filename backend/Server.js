const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
const mongoURI='mongodb+srv://sarthak:sarthak@cluster0.1hrvz.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoURI,{useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true})
.then(()=> console.log("mongodb connected"))
.catch(err=> console.log(err));
const signup=require('./routes/signup')
const login=require('./routes/login')
const consultant=require('./routes//consultant')
const user=require('./routes/User');
app.use('/signup',signup)
app.use('/login',login)
app.use('/',consultant)
app.use('/user',user);
app.listen(5000,()=>{
    console.log("server started");
})
