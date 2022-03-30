'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Controle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Controle.belongsTo(models.Ciclo, {
        foreignKey: 'cicloId',
        onDelete: 'CASCADE'
      })
    }
  }
  Controle.init({
    controleId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "controleId"
    },
    cicloId: {
      type: DataTypes.INTEGER,
      field: "cicloId"
    },
    aviarioId: {
      type: DataTypes.INTEGER,
      field: "aviarioId"
    },
    data_controle: DataTypes.DATE,
    temp_max: DataTypes.FLOAT,
    temp_min: DataTypes.FLOAT,
    umidade: DataTypes.INTEGER,
    leit_agua: DataTypes.INTEGER,
    cons_total: DataTypes.INTEGER,
    cons_ave: DataTypes.FLOAT,
    leit_inicial: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Controle',
  });
  return Controle;
};