'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('descartes', {
      descarteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      loteId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aviarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('descartes', {
      fields: ['cicloId'],
      type: 'FOREIGN KEY',
      name: 'FK_ciclo_descarte',
      references: {
        table: 'ciclos',
        field: 'cicloId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('descartes');
  }
};