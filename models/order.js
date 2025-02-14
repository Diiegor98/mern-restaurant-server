const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user: String,
  date: String,
  menu: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: Boolean,
  price: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
