'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meta extends Model {

    static associate(models) {

    }
  }
  Meta.init({
    metaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "metaId",
      autoIncrement: true
    },
    cicloId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "cicloId"
    },
    tipo_periodo: DataTypes.STRING,
    valor_periodo: DataTypes.STRING,
    tipo_meta: DataTypes.STRING,
    valor_meta: DataTypes.FLOAT,
    data_inicial: DataTypes.DATE,
    data_final: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Meta',
    tableName: 'metas'
  });
  return Meta;
};