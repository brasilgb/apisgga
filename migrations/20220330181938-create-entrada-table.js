'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entradas', {
      entradaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      data_entrada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      descritivo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      observacao: {
        allowNull: true,
        type: Sequelize.STRING
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
    .then(() => queryInterface.addConstraint('entradas', {
      fields: ['cicloId'],
      type: 'FOREIGN KEY',
      name: 'FK_ciclo_entrada',
      references: {
        table: 'ciclos',
        field: 'cicloId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entradas');
  }
};