'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tarefa.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Tarefa.init({
    tarefaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: 'tarefaId'
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: 'cicloId'
    },
    data_inicial: DataTypes.DATE,
    data_previsao: DataTypes.DATE,
    data_termino: DataTypes.DATE,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    situacao: DataTypes.TINYINT,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas'
  });
  return Tarefa;
};