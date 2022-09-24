const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const customers = require('./routes/customerDetails');
const products = require("./routes/productRouter")
const order = require("./routes/orderRouter")
app.use('/api/customers',customers);
app.use("/api/products" ,products);
app.use("/api/order",order)
app.listen(3050, () => {
  console.log("server started on port 3050");
});
