'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('envios', {
      envioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_hora: {
        type: Sequelize.DATE,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('envios', {
      fields: ['cicloId'],
      type: 'FOREIGN KEY',
      name: 'FK_ciclo_envio',
      references: {
        table: 'ciclos',
        field: 'cicloId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('envios');
  }
};