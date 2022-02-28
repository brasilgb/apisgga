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
      field: "metaId"
    },
    cicloId: DataTypes.INTEGER,
    tipo_periodo: DataTypes.STRING,
    desc_periodo: DataTypes.STRING,
    tipo_meta: DataTypes.STRING,
    valor_meta: DataTypes.FLOAT,
    data_inicial: DataTypes.DATE,
    data_final: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Meta',
  });
  return Meta;
};