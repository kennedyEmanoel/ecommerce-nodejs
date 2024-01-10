import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    try {
      const newAdmin = await Admin.create(req.body);
      const { id, name, email } = newAdmin;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const admin = await Admin.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(admin);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const admin = await Admin.findByPk(req.adminId);

      const { id, name, email } = admin;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const admin = await Admin.findByPk(req.adminId);

      if (!admin) {
        return res.status(400).json({
          errors: ['admin does not exist'],
        });
      }

      const newData = await admin.update(req.body);
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
      const admin = await Admin.findByPk(req.adminId);

      if (!admin) {
        return res.status(400).json({
          errors: ['Admin does not exist'],
        });
      }

      await admin.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AdminController();
