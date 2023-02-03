'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ciclos', {
      idCiclo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      dataInicial: {
        allowNull: false,
        type: Sequelize.DATE
      },
      semanaInicial: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataFinal: {
        allowNull: true,
        type: Sequelize.DATE
      },
      semanaFinal: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ciclos');
  }
};