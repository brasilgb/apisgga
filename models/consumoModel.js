'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consumo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consumo.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Consumo.init({
    consumoId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "consumoId",
      autoIncrement: true
    },
    aviarioId: {
      type: DataTypes.INTEGER,
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
    data_consumo: DataTypes.DATE,
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
    modelName: 'Consumo',
  });
  return Consumo;
};