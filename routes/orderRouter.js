const express = require("express");
const router = express.Router();
const {SCOList,maxOerderOneYear} = require("../controllers/orderController")
router.get("/maxOrderOneyear",maxOerderOneYear);//Api to fetch customer Details with maximum Orders in an year
router.get("/specificCustomerList",SCOList);//Api to fetch specific Customer Orders list

module.exports = router;