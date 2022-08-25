const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    license_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    is_donor: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'driver',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trips',
  }
);

module.exports = Trips;
