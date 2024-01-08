import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const product = await Product.findAll();
    res.json(product);
  }

  async store(req, res) {
    try {
      const newProduct = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
      };
      const product = await Product.create(newProduct);
      return res.status(200).send({
        message: 'User created successfully!',
        product,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['there is no product'],
        });
      }

      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['there is no product'],
        });
      }

      const updatedProduct = await product.update(req.body);
      return res.json(updatedProduct);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['there is no product'],
        });
      }

      await product.destroy();
      return res.json('Deleted product');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ProductController();
