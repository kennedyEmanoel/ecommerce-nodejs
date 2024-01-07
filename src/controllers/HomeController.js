import Product from '../models/Product';

class HomeController {
  async index(req, res) {
    const newProduct = await Product.create({
      name: 'corrente',
      description: 'corrente 60 mm',
      price: 230,
      amount: 1,
    });
    res.json(newProduct);
  }
}

export default new HomeController();
