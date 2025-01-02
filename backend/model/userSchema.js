const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String},
  profilePicture: {type: String, default: "./defaultpicture.jpg"},
  role: {type: String, default: "customer"},
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: "Cart"}],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}],
}, {timestamps: true});


userSchema.pre("save", async function(next) {
  console.log("password is here", this.password);
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password, "password hashed");
    next();
  } catch (error) {
    console.log("error is here", error);
    throw new Error(error);
  }
});

module.exports = mongoose.model("user", userSchema);
