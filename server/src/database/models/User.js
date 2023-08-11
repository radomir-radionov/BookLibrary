import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Booking, {
        foreignKey: 'customerId',
        as: 'bookings',
      })
      User.hasMany(models.Delivery, {
        foreignKey: 'recipientId',
        as: 'receivedDeliveries',
      })
      User.hasMany(models.History, {
        foreignKey: 'userId',
        as: 'histories',
      })
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      blocked: DataTypes.BOOLEAN,
      confirmed: DataTypes.BOOLEAN,
      provider: DataTypes.STRING,
      username: DataTypes.STRING,
      testField: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}