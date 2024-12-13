const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  status: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
