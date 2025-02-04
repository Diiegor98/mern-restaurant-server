const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user: String,
  date: String,
  menu: [String],
  status: Boolean,
});

module.exports = mongoose.model("Order", OrderSchema);
