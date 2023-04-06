'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('envios', {
      idEnvio: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      dataEnvio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dataSearch: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      loteId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      incubaveis: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comerciais: {
        allowNull: false,
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
    }).then(() => queryInterface.addConstraint('envios', {
      fields: ['cicloId'],
      type: 'foreign key',
      name: 'fk_envios_ciclo',
      references: {
        table: 'ciclos',
        field: 'idCiclo'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('envios');
  }
};