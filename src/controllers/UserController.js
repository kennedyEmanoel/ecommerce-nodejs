import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const {
        id, name, email, role,
      } = newUser;
      console.log(newUser);
      return res.json({
        id, name, email, role,
      });
    } catch (e) {
      if (e.errors) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      const {
        id, name, email, role,
      } = user;
      return res.json({
        id, name, email, role,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      const newData = await user.update(req.body);
      const { id, name, email } = newData;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      console.log(user);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
