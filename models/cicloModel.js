'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ciclo extends Model {

    static associate(models) {

    }
  }
  Ciclo.init({
    CicloId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "cicloId"
    },
    data_inicial: DataTypes.DATE,
    data_final: DataTypes.DATE,
    semn_inicial: DataTypes.INTEGER,
    semn_final: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ciclo',
  });
  return Ciclo;
};