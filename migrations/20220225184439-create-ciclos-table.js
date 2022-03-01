'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ciclos', {
      cicloId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      data_inicial: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_final: {
        type: Sequelize.DATE,
        allowNull: true
      },
      semn_inicial: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      semn_final: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ciclos');
  }
};