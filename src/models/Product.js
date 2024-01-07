import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.FLOAT,
      amount: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
}
