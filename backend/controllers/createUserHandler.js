const userSchema = require('../model/userModel');

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await userSchema.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const User = new userSchema({
      username,
      password,
    });
    await User.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error saving user', error: error.message });
  }
};

module.exports = createUser;
