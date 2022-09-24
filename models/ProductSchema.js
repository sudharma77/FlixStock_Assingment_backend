
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    ProductCategory:{
        type:String,
        required: 'Please enter your email',
        unique:true,
    },
    productInfo:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantityAvailable:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("ProductDetails", productSchema);