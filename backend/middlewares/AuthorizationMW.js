const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedUser;
    console.log(decodedUser, 'this is the decoded user');
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
