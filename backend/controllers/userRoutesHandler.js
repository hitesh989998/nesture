const User = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const newUser = new User({
      username,
      password,
      role,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

exports.updateUser = async (req, res) => {
  const { username, password, role } = req.body;
  const newUser = {
    username,
    password,
    role,
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: newUser },
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
    throw error;
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
    throw error;
  }
};
