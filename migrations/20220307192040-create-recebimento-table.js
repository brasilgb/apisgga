'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recebimentos', {
      recebimentoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cicloId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_recebimento: {
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
      nota_fiscal: {
        type: Sequelize.STRING,
        allowNull: false
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
      .then(() => queryInterface.addConstraint('recebimentos', {
        fields: ['cicloId'],
        type: 'FOREIGN KEY',
        name: 'FK_ciclo_recebimento',
        references: {
          table: 'ciclos',
          field: 'cicloId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recebimentos');
  }
};