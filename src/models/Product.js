import Sequelize, { Model } from 'sequelize';

export default class Products extends Model {
  static init(sequelize) {
    super.init({
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
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
        defaultValue: 0,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
