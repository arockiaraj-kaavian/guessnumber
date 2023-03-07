const express=require('express');
const cors =require('cors');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const app=express();

const key='rajubai';

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());


const random = Math.floor(Math.random()*25);


app.post('/checkrandom',(req,res)=>{

    const {random}=req.body;
    console.log(random);
    const token=jwt.sign({random},key);
    console.log(token);
    
    res.json(token);
})

app.post('/checknumber',(req,res)=>{
    const {token}=req.body;
    console.log(token);
    const random=jwt.verify(token.token,key);
    console.log(random);
    
    res.json(random);

})


app.listen(3001,()=>{
    console.log('server running at the port 3001');
}) 