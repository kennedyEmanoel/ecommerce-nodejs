import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Product from '../models/Product';
import User from '../models/User';
// import Foto from '../models/Foto';

const models = [Product, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
