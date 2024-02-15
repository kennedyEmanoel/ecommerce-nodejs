import Cart from '../models/Cart';

class CartController {
  async store(req, res) {
    try {
      const newCart = await Cart.create(req.body);
      const {
        id, product_id, user_id, quantity,
      } = newCart;
      return res.json({
        id, product_id, user_id, quantity,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const cart = await Cart.findAll({ attributes: ['id', 'product_id', 'user_id', 'quantity'] });
      console.log(cart);
      return res.json(cart);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const cartId = req.params.id;
      const cart = await Cart.findByPk(cartId);

      if (!cart) {
        return res.status(400).json({
          errors: ['Cart does not exist'],
        });
      }

      const newData = await cart.update(req.body);
      console.log(newData);
      const {
        id, product_id, user_id, quantity,
      } = newData;
      return res.json({
        id, product_id, user_id, quantity,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const cartId = req.params.id;
      const cart = await Cart.findByPk(cartId);

      if (!cart) {
        return res.status(400).json({
          errors: ['Product does not exist'],
        });
      }

      await cart.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CartController();
