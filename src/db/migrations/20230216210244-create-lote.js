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
        allowNull: false,
        type: Sequelize.BIGINT
      },
      lote: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataEntrada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataCapitalizacao:{
        allowNull: true,
        type: Sequelize.DATE
      },
      femeaCapitalizada: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      machoCapitalizado: {
        allowNull: true,
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
    }).then(() => queryInterface.addConstraint('lotes', {
      fields: ['cicloId'],
      type: 'foreign key',
      name: 'fk_lotes_ciclos',
      references: {
        table: 'ciclos',
        field: 'idCiclo'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lotes');
  }
};