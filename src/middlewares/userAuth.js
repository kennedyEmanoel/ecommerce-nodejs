import jwt from 'jsonwebtoken';
// import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    let userData;

    try {
      userData = jwt.verify(token, process.env.TOKEN_SECRET);
      console.log(userData);

      if (userData.role === 'user') {
        req.userId = userData.id;
        req.userEmail = userData.email;
        req.userRole = 'user';
        return next();
      }
    } catch (error) {
      const adminData = jwt.verify(token, process.env.TOKEN_ADMIN);
      console.log(adminData);

      if (adminData.role === 'admin') {
        req.userId = adminData.id;
        req.userEmail = adminData.email;
        req.userRole = 'admin';
        return next();
      }
    }

    return res.status(401).json({
      errors: ['Invalid user'],
    });
  } catch (e) {
    return res.status(401).json({
      errors: ['Expired or invalid token'],
    });
  }
};
