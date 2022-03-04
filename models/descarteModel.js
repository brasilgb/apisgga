'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Descarte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Descarte.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      });
    }
  }
  Descarte.init({
    envioId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "envioId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    loteId: {
      type: DataTypes.INTEGER,
      field: "loteId"
    },
    aviarioId: {
      type: DataTypes.INTEGER,
      field: "aviarioId"
    },
    data_hora: DataTypes.DATE,
    quantidade: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Descarte',
  });
  return Descarte;
};