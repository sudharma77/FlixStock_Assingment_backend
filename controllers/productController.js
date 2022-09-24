const productDetail = require("../models/ProductSchema");
module.exports.CreateProduct = async(req,res)=>{
    const customer = new productDetail({
        ProductCategory:req.body.ProductCategory,
        productInfo:req.body.productInfo,
        price:req.body.price,
        quantityAvailable:req.body.quantityAvailable
    })
    try{
        const data = await customer.save();
        res.json(data);
    }catch(e){
        res.status(400).json(e.message)
    }   
}

module.exports.priceUpdate = async(req,res)=>{
    try {
        const updatedProduct = await productDetail.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (e) {
        res.status(400).json(e.message)
      }
}

module.exports.showProduct = async(req,res)=>{
    try{
        const product = await productDetail.find();
        res.status(200).json(product)         
    }catch (e) {
        res.status(400).json(e.message)
    } 
}


