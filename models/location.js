'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.belongsTo(models.Weather, {foreignKey: "LocationId"})
    }
  };
  Location.init({
    city_id: DataTypes.INTEGER,
    city_name: DataTypes.STRING,
    country_code: DataTypes.STRING,
    lon: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};