const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    productList:{
        type:Object,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    paymentInto:{
        type:{
            type:String,
            required:true
        }
    },
    date:{
        type:String,
        default:new Date().toISOString().split('T')[0]
    }
})

module.exports = mongoose.model("OrderDetails", orderSchema);