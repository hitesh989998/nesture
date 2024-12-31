const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: 'https://example.com/default-profile.png' },
  role: { type: String, default: 'customer' },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }], 
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], 
}, { timestamps: true });


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
