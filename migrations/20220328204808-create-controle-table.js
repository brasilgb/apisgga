'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('controles', {
      controleId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aviarioId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      data_controle: {
        type: Sequelize.DATE
      },
      temp_max: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      temp_min: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      umidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      leit_agua: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cons_total: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cons_ave: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      leit_inicial: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    .then(() => queryInterface.addConstraint('controles', {
      fields: ['cicloId'],
      type: 'FOREIGN KEY',
      name: 'FK_ciclo_controle',
      references: {
        table: 'ciclos',
        field: 'cicloId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('controles');
  }
};