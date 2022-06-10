'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Email.init({
    emailId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "emailId",
      autoIncrement: true
    },
    servidor: DataTypes.STRING,
    porta: DataTypes.STRING,
    seguranca: DataTypes.STRING,
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    remetente: DataTypes.STRING,
    destinatario: DataTypes.STRING,
    assunto: DataTypes.STRING,
    mensagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Email',
  });
  return Email;
};