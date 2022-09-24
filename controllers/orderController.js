const orderSchema = require("../models/orderSchema")
const customerSchema = require("../models/CustDetails")

//take some time to resolve it ..
//some stuck arise here ..
module.exports.SCOList = async(req, res)=> {
    const {userId, email, phone, name,product} = req.body;
    try {
      const user = await customerSchema.findById(userId);
      const order = await orderSchema.create({
        productList:product,
        owner: user._id,
        totalPrice:user.product.price+order.totalPrice,
        paymentInto:{
            type:"COD"
        }
        });
      await order.save();
      user.product.push(order);
      await user.save();
      res.status(200).json(user)  
    } catch (e) {
      res.status(400).json(e.message)
    }
  }

  //take some time to resolve it ..
//some stuck arise here ..

  module.exports.maxOerderOneYear = async(req, res)=> {
    try {
      const user = await customerSchema.find();
      var uId = 0;
      var maxPrice = 0;
      for(let i = 0 ; i < user.length ; i++){
        uId = uId;
            if(maxPrice < user.product.totalPrice){
                uId = user._id;
                maxPrice = user.product.totalPrice
            }
      }
      const maxUser = await customerSchema.findById(uId);
      res.status(200).json(maxUser)  
    } catch (e) {
      res.status(400).json(e.message)
    }
  }