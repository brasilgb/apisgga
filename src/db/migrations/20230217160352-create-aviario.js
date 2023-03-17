'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aviarios', {
      idAviario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      loteId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      aviario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataEntrada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      box1Femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box2Femea: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      box3Femea: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      box4Femea: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      box1Macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box2Macho: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      box3Macho: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      box4Macho: {
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
    }).then(() => queryInterface.addConstraint('aviarios', {
      fields: ['loteId'],
      type: 'foreign key',
      name: 'fk_aviarios_lotes',
      references: {
        table: 'lotes',
        field: 'idLote'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aviarios');
  }
};