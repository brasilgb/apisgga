'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Despesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Despesa.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Despesa.init({
    despesaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "despesaId",
      autoIncrement: true
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    vencimento: DataTypes.DATE,
    descritivo: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    situacao: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Despesa',
  });
  return Despesa;
};