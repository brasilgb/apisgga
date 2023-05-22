'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pesagens', {
      idPesagem: {
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
      aviarioId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      dataPesagem: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      semana: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box1Femea: {
        allowNull: false,
        type: Sequelize.FLOAT(10,3)
      },
      box2Femea: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      box3Femea: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      box4Femea: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      box1Macho: {
        allowNull: false,
        type: Sequelize.FLOAT(10,3)
      },
      box2Macho: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      box3Macho: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      box4Macho: {
        allowNull: true,
        type: Sequelize.FLOAT(10,3)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('pesagens', {
      fields: ['loteId'],
      type: 'foreign key',
      name: 'fk_pesagens_lotes',
      references: {
        table: 'lotes',
        field: 'idLote'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pesagens');
  }
};