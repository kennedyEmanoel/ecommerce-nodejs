import Sequelize, { Model } from 'sequelize';

export default class Cart extends Model {
  static init(sequelize) {
    super.init({
      product_id: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
