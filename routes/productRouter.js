const express = require("express");
const router = express.Router();
const {CreateProduct,priceUpdate,showProduct} = require("../controllers/productController")

router.post("/newProduct",CreateProduct);//Api to create new Product 
router.put("/priceUpdate/:id",priceUpdate);//API to update Product Price
router.get("/showProduct",showProduct);
//router.get("/",customer);

module.exports = router;