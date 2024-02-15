import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Product from '../models/Product';
import Cart from '../models/Cart';

const models = [User, Product, Cart];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
