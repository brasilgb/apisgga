'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Envio.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      });
    }
  }
  Envio.init({
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
    data_hora: DataTypes.DATE,
    incubaveis: DataTypes.INTEGER,
    comerciais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Envio',
    tableName: 'envios'
  });
  return Envio;
};