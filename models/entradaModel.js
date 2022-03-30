'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrada.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Entrada.init({
    entradaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "entradaId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    data_entrada: DataTypes.DATE,
    descritivo: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entrada',
  });
  return Entrada;
};