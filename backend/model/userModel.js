const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: './defaultpicture.jpg' },
    role: { type: String, default: 'customer' },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = mongoose.model('user', userSchema);
