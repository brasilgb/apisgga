'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lote.belongsTo(models.Periodo, {
        foreignKey: 'periodoId',
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
    periodoId: DataTypes.INTEGER,
    lote: DataTypes.STRING,
    data_entrada: DataTypes.DATE,
    femea: DataTypes.INTEGER,
    macho: DataTypes.INTEGER,
    capi_femea: DataTypes.INTEGER,
    capi_macho: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lote',
  });
  return Lote;
};