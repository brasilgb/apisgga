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
      // define association here
    }
  }
  Lote.init({
    cicloId: DataTypes.INTEGER,
    lote: DataTypes.STRING,
    dataEntrada: DataTypes.DATE,
    femeas: DataTypes.INTEGER,
    macho: DataTypes.INTEGER,
    femeaCapitalizada: DataTypes.INTEGER,
    machoCapitalizado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lote',
  });
  return Lote;
};