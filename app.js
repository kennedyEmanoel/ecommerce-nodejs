import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import user from './src/routes/userRoutes';
import admin from './src/routes/adminRoutes';

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
    this.app.use('/admin/', admin);
  }
}

export default new App().app;
