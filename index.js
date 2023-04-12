const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const path = require('path')
const nodemailer = require('nodemailer')
dotenv.config();


const sendmail = require('./utils/sendmail')
const app = express()


app.use(express.json())
app.use(cors())
// app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.get('/',(req,res)=>{
    res.json('fgsjhkk')
})

app.post('/mail',(req,res)=>{
  console.log(req.body)
   const email = req.body.email
   const subject = `Email:${req.body.email} PhoneNumber:${req.body.phone} Full Name:${req.body.firstName} ${req.body.lastName} `
   const text = `${req.body.message}`  

   
  
     sendmail(res,email,subject,text).then(()=>console.log('sent')).catch((err)=>console.log(err))
      
   

   
})



app.listen(5000,()=>console.log('connected'))