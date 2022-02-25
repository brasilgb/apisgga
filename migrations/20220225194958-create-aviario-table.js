'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aviarios', {
      aviarioId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      periodoId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      loteId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aviario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      box1_femea: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      box2_femea: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box3_femea: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box4_femea: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box1_macho: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      box2_macho: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box3_macho: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box4_macho: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      tot_femea: {
        type: Sequelize.INTEGER
      },
      tot_macho: {
        type: Sequelize.INTEGER
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
      .then(() => queryInterface.addConstraint('Aviarios', {
        fields: ['loteId'],
        type: 'FOREIGN KEY',
        name: 'FK_lote_aviario',
        references: {
          table: 'Lotes',
          field: 'loteId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Aviarios');
  }
};