import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import user from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import product from './src/routes/productRoutes';
// import cart from './src/routes/cartRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', user);
    this.app.use('/products/', product);
    this.app.use('/tokens/', tokenRoutes);
    // this.app.use('/cart/', cart);
  }
}

export default new App().app;
