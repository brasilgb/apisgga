'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lotes', {
      loteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      periodoId: {
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
      .then(() => queryInterface.addConstraint('Lotes', {
        fields: ['periodoId'],
        type: 'FOREIGN KEY',
        name: 'FK_periodo_lote',
        references: {
          table: 'Periodos',
          field: 'periodoId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lotes');
  }
};