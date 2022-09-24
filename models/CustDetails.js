const mongoose = require("mongoose");
const detail = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("CustomerDetails", detail);