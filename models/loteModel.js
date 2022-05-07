'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lote extends Model {
    
    static associate(models) {
      Lote.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      });
      Lote.hasMany(models.Aviario, {
        foreignKey: 'loteId',
        as: 'aviarios',
        onDelete: 'CASCADE'
      });
    }
  }
  Lote.init({
    loteId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "loteId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    lote: DataTypes.STRING,
    data_entrada: DataTypes.DATE,
    femea: DataTypes.INTEGER,
    macho: DataTypes.INTEGER,
    capi_femea: DataTypes.INTEGER,
    capi_macho: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lote',
    tableName: 'lotes'
  });
  return Lote;
};