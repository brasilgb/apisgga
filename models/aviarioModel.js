'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aviario extends Model {
    
    static associate(models) {
      Aviario.belongsTo(models.Lote, {
        foreignKey: 'loteId',
        onDelete: 'CASCADE'
      });
    }
  }
  Aviario.init({
    aviarioId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "aviarioId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    loteId: {
      type: DataTypes.INTEGER,
      field: "loteId"
    },
    aviario: DataTypes.STRING,
    data_entrada: DataTypes.DATE,
    box1_femea: DataTypes.INTEGER,
    box2_femea: DataTypes.INTEGER,
    box3_femea: DataTypes.INTEGER,
    box4_femea: DataTypes.INTEGER,
    box1_macho: DataTypes.INTEGER,
    box2_macho: DataTypes.INTEGER,
    box3_macho: DataTypes.INTEGER,
    box4_macho: DataTypes.INTEGER,
    totl_femea: DataTypes.INTEGER,
    totl_macho: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Aviario',
    tableName: 'aviarios'
  });
  return Aviario;
};