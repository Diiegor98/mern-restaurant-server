const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  status: Boolean,
  price: Number,
  detail: String,
  category: String,
});

module.exports = mongoose.model("Menu", MenuSchema);
