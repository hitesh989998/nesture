const userSchema = require('../model/userSchema')

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Request data:', username, password);

    const existingUser = await userSchema.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new userSchema({
      username,
      password,
    });

    console.log('Attempting to save user:', user);

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Error saving user', error: error.message });
  }
};

module.exports = createUser;
