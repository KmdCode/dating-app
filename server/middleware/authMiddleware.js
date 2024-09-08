const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const dotenv = require('dotenv')

dotenv.config({path: './../config/config.env'})


exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'You are not logged in! Please log in to get access.',
    });
  }
  
  console.log("token from middleware:", token)

  try {
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token no longer exists.',
      });
    }

    req.user = currentUser;
    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({
      status: 'fail',
      message: 'Invalid or expired token',
    });
  }
};
