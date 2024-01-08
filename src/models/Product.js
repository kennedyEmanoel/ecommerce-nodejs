import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Product already exists',
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'You need to add a description up to 255 characters',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
