
const createorder = async(req,res)=>{

  try{

    //Information send by client to create the razorpay payment order
    const options ={
      amount: req.body.amount * 100, //IN PAISE
      currency: "INR",
      receipt: "receipt_"+Date.now(),

    } ; // receipt no and order details store in db

    const order = await Razorpay.orders.create(options);

    res.json(order);

  }catch(err){
     res.json({
      status:500,
      message:"Internal Server Error "
     });
  }
}
module.exports = {createorder};