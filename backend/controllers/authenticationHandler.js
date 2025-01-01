const userSchema = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generatetokenJWT');

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password,'received from there');

    const user = await userSchema.findOne({ username });
    console.log(user,'user is here')

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const UserMatch = await bcrypt.compare(password, user.password);

    if (!UserMatch) {
      return res.status(400).json({ message: 'Invalid username/password combination' });
    }

    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,          
      maxAge: 2592000000,      // 30 days in milliseconds
      sameSite: 'strict',      
      secure: true,            
    });

    return res.status(200).json({ message: 'Login successful'});
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = loginUser;
