const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid Token', error: error });
  }
};

module.exports = authMiddleware;
