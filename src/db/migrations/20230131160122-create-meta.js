'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Meta', {
      idMeta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      semana: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataInicial: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dataFinal: {
        type: Sequelize.DATE
      },
      eclosao: {
        type: Sequelize.INTEGER
      },
      fertilidade: {
        type: Sequelize.INTEGER
      },
      producao: {
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
    await queryInterface.dropTable('Meta');
  }
};