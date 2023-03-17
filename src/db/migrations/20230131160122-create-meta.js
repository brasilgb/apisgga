'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('metas', {
      idMeta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      semana: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataInicial: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      dataFinal: {
        type: Sequelize.DATEONLY
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
    }).then(() => queryInterface.addConstraint('metas', {
      fields: ['cicloId'],
      type: 'foreign key',
      name: 'fk_metas_ciclos',
      references: {
        table: 'ciclos',
        field: 'idCiclo'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('metas');
  }
};