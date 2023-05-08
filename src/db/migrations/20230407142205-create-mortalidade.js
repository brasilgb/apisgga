'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mortalidades', {
      idMortalidade: {
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
        type: Sequelize.INTEGER
      },
      aviarioId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataMorte: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      causaMorte: {
        allowNull: false,
        type: Sequelize.STRING
      },
      outraCausa: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      box1Femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box2Femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box3Femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box4Femea: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box1Macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box2Macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box3Macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box4Macho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalFemeas: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalMachos: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalAves: {
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
    }).then(() => queryInterface.addConstraint('mortalidades', {
      fields: ['cicloId'],
      type: 'foreign key',
      name: 'fk_mortalidades_ciclos',
      references: {
        table: 'ciclos',
        field: 'idCiclo'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mortalidades');
  }
};