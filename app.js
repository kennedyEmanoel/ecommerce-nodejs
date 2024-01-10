import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import home from './src/routes/homes';
import user from './src/routes/users';
import token from './src/routes/token';
import product from './src/routes/products';
import admin from './src/routes/admin';

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
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', token);
    this.app.use('/admin/', admin);
    this.app.use('/product/', product);
  }
}

export default new App().app;
