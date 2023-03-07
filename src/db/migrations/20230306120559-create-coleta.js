'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coletas', {
      idColeta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      coleta: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataColeta: {
        allowNull: false,
        type: Sequelize.DATE
      },
      limposNinho: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      sujosNinho: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      ovosCama: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      duasGemas: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      refugos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      pequenos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      cascaFina: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      frios: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      esmagadosQuebrados: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      camaNaoIncubaveis: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      deformados: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      sujosDeCama: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      trincados: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      eliminados: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      incubaveisBons: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      incubaveis: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comerciais: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      posturaDia: {
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
    }).then(() => queryInterface.addConstraint('coletas', {
      fields: ['aviarioId'],
      type: 'foreign key',
      name: 'fk_coletas_aviarios',
      references: {
        table: 'aviarios',
        field: 'idAviario'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coletas');
  }
};