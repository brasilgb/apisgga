'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('metas', {
      metaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_periodo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_periodo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_meta: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_meta: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      data_inicial: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_final: {
        type: Sequelize.DATE,
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
      .then(() => queryInterface.addConstraint('metas', {
        fields: ['cicloId'],
        type: 'FOREIGN KEY',
        name: 'FK_ciclo_semanas',
        references: {
          table: 'ciclos',
          field: 'cicloId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('metas');
  }
};