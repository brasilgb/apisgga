'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coletas', {
      coletaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aviarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      coleta: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false
      },
      limpos_ninho: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sujos_ninho: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ovos_cama: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      duas_gemas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      refugos: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pequenos: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      casca_fina: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      frios: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      esmagados_quebrados: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cama_nao_incubaveis: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deformados: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sujos_cama: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      trincados: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      eliminados: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      incubaveis_bons: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      incubaveis: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comerciais: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      postura_dia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('coletas', {
      fields: ['aviarioId'],
      type: 'FOREIGN KEY',
      name: 'FK_aviario_coleta',
      references: {
        table: 'aviarios',
        field: 'aviarioId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coletas');
  }
};