const express = require('express');
const userRouter = express.Router();
const {createorder}= require('../controller/createOrder');
const {verifyPayment} = require('../controller/verifyPayment');

//prefix-endpoint user
userRouter.post('/create-order',createorder);
userRouter.post("/verify-payment",verifyPayment);

module.exports = {userRouter};

