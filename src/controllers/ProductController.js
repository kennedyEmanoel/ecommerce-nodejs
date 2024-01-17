import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      const {
        id, name, description, price,
      } = newProduct;
      return res.json({
        id, name, description, price,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const product = await Product.findAll({ attributes: ['id', 'name', 'description', 'price'] });
      console.log(product);
      return res.json(product);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const product = await Product.findByPk(req.productId);

      const {
        id, name, description, price,
      } = product;
      return res.json({
        id, name, description, price,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(400).json({
          errors: ['Product does not exist'],
        });
      }

      const newData = await product.update(req.body);
      console.log(newData);
      const {
        id, name, description, price,
      } = newData;
      return res.json({
        id, name, description, price,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(400).json({
          errors: ['Product does not exist'],
        });
      }

      await product.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ProductController();
