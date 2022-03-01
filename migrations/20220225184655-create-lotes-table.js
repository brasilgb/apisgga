'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lotes', {
      loteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lote: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      femea: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      macho: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      capi_femea: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      capi_macho: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
      .then(() => queryInterface.addConstraint('lotes', {
        fields: ['cicloId'],
        type: 'FOREIGN KEY',
        name: 'FK_ciclo_lote',
        references: {
          table: 'ciclos',
          field: 'cicloId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lotes');
  }
};