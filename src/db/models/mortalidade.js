'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mortalidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mortalidade.init({
    cicloId: DataTypes.INTEGER,
    loteId: DataTypes.INTEGER,
    aviarioId: DataTypes.INTEGER,
    dataMortalidade: DataTypes.DATE,
    box1Femea: DataTypes.NUMBER,
    box2Femea: DataTypes.NUMBER,
    box3Femea: DataTypes.NUMBER,
    box4Femea: DataTypes.NUMBER,
    box1Macho: DataTypes.NUMBER,
    box2Macho: DataTypes.NUMBER,
    box3Macho: DataTypes.NUMBER,
    box4Macho: DataTypes.NUMBER,
    totalFemeas: DataTypes.NUMBER,
    totalMachos: DataTypes.NUMBER,
    totalAves: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Mortalidade',
  });
  return Mortalidade;
};