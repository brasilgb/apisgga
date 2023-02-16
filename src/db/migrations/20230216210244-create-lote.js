'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lotes', {
      idLote: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cicloId: {
        type: Sequelize.INTEGER
      },
      lote: {
        type: Sequelize.STRING
      },
      dataEntrada: {
        type: Sequelize.DATEONLY
      },
      femeas: {
        type: Sequelize.INTEGER
      },
      macho: {
        type: Sequelize.INTEGER
      },
      femeaCapitalizada: {
        type: Sequelize.INTEGER
      },
      machoCapitalizado: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('lotes');
  }
};