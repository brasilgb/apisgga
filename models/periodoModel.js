'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Periodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Periodo.init({
    periodoId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "productId"
    },
    data_inicial: DataTypes.DATE,
    data_final: DataTypes.DATE,
    semn_inicial: DataTypes.INTEGER,
    semn_final: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Periodo',
  });
  return Periodo;
};