const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const Razorpay = require('razorpay');

const path = require('path');
const {userRouter} = require('./ROUTES/userRoutes');

const {validatewebhookSignature} = require('razorpay/dist/utils/razorpay-utils');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.static("public"));


const PORT = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//   res.send("This is razorpay");
// });

app.get('/home',(req,res)=>{
 
  res.render("index",
    {
      key:process.env.RAZORPAY_KEY_ID
    }
  )
})
app.use('/user',userRouter);

app.listen(PORT,()=>{
  console.log(`Server is runnig on http://localhost:${PORT}`);
})