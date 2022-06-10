'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coleta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coleta.belongsTo(models.Aviario, {
        foreignKey: 'aviarioId',
        onDelete: 'CASCADE'
      })
    }
  }
  Coleta.init({
    coletaId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "coletaId",
      autoIncrement: true
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    aviarioId: {
      type: DataTypes.INTEGER,
      field: "aviarioId"
    },
    coleta: DataTypes.INTEGER,
    data_hora: DataTypes.DATE,
    limpos_ninho: DataTypes.INTEGER,
    sujos_ninho: DataTypes.INTEGER,
    ovos_cama: DataTypes.INTEGER,
    duas_gemas: DataTypes.INTEGER,
    refugos: DataTypes.INTEGER,
    pequenos: DataTypes.INTEGER,
    casca_fina: DataTypes.INTEGER,
    frios: DataTypes.INTEGER,
    esmagados_quebrados: DataTypes.INTEGER,
    cama_nao_incubaveis: DataTypes.INTEGER,
    deformados: DataTypes.INTEGER,
    sujos_cama: DataTypes.INTEGER,
    trincados: DataTypes.INTEGER,
    eliminados: DataTypes.INTEGER,
    incubaveis_bons: DataTypes.INTEGER,
    incubaveis: DataTypes.INTEGER,
    comerciais: DataTypes.INTEGER,
    postura_dia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coleta',
    tableName: 'coletas'
  });
  return Coleta;
};