import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';

import user from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import product from './src/routes/productRoutes';
import cart from './src/routes/cartRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not  allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', user);
    this.app.use('/products/', product);
    this.app.use('/cart/', cart);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
