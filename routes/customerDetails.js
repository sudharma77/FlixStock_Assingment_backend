const express = require("express");
const router = express.Router();
const {customerList,CreateCustomer,customer} = require("../controllers/Customer")
router.get("/customerList",customerList);//Api to fetch Customers list

router.post("/newCustomer",CreateCustomer); //Api to create new Customer
router.get("/",customer);

module.exports = router;