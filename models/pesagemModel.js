'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pesagem.init({
    pesagemId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "pesagemId",
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
    data_pesagem: DataTypes.DATE,
    semana: DataTypes.INTEGER,
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
    modelName: 'Pesagem',
    tableName: 'pesagens'
  });
  return pesagem;
};