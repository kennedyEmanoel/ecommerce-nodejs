import Sequelize, { Model } from 'sequelize';

export default class Cart extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
        },
        references: 'users',
        key: 'id',
      },
      product_id: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
        },
        references: 'products',
        key: 'id',
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    }, {
      sequelize,
      modelName: 'Cart',
    });
    return this;
  }
}
