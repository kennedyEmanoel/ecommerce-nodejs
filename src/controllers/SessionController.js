import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['invalid password'],
      });
    }

    const { id, role } = user;
    console.log(role);

    if (role === 'admin') {
      const token = jwt.sign({ id, email, role: user.role }, process.env.TOKEN_ADMIN, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({
        token,
        user: {
          name: user.name, id, email, role,
        },
      });
    }

    const token = jwt.sign({ id, email, role: user.role }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      user: {
        name: user.name, id, email, role,
      },
    });
  }
}

export default new TokenController();
