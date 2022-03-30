'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empresa.init({
    empresaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "empresaId"
    },
    cnpj: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    segmento: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.CHAR,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};