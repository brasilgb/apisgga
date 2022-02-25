'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Periodos', {
      periodoId: {
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
        allowNull: false
      },
      semn_inicial: {
        type: Sequelize.DATE,
        allowNull: false
      },
      semn_final: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Periodos');
  }
};