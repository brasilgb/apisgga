'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Periodo extends Model {

    static associate(models) {

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