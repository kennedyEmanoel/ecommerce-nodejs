import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_ADMIN);
    const { id, email } = data;

    const admin = await Admin.findOne({
      where: {
        id,
        email,
      },
    });

    if (!admin) {
      return res.status(401).json({
        errors: ['Invalid admin'],
      });
    }

    req.adminId = id;
    req.adminEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Expired or invalid token'],
    });
  }
};
