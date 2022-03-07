'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recebimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recebimento.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Recebimento.init({
    recebimentoId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "recebimentoId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    data_recebimento: DataTypes.DATE,
    femea: DataTypes.INTEGER,
    macho: DataTypes.INTEGER,
    nota_fiscal: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recebimento',
    tableName: 'recebimentos'
  });
  return Recebimento;
};