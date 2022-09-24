const detail = require("../models/CustDetails");
module.exports.customerList = async(req,res)=>{
    try{
        const customer = await detail.find();
        const arr = [];
        for(let i = 0 ; i < customer.length ; i++){
            arr.push(customer[i].name)
        }
        res.status(200).json({arr});
       
    }catch(e){
        res.status(400).json(e.message)
    }   
}

module.exports.customer = async(req,res)=>{
    try{
        const customer = await detail.find();
        const data = customer.join();
        res.status(200).json(customer);
       
    }catch(e){
        res.status(400).json(e.message)
    }   
}

module.exports.CreateCustomer = async(req,res)=>{
    const customer = new detail({
        email:req.body.email,
        phone:req.body.phone,
        name:req.body.name
    })
    try{
        const cstm = await customer.save();
        res.status(200).json(cstm);
    }catch(e){
        res.status(400).json(e.message)
    }   
}
