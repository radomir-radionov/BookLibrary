const {Model} = require('sequelize')

export default (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      })
      History.belongsTo(models.Book, {
        foreignKey: 'bookId',
        as: 'book',
      })
    }
  }
  History.init(
    {},
    {
      sequelize,
      modelName: 'History',
    }
  )
  return History
}