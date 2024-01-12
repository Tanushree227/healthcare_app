const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  c_password: {
    type: String,
    required: [true, "Confirm Password is Required"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
