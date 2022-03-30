'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pesagens', {
      pesagemId: {
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
      semana: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_pesagem: {
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
      totl_femea: {
        type: Sequelize.INTEGER
      },
      totl_macho: {
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
      .then(() => queryInterface.addConstraint('pesagens', {
        fields: ['cicloId'],
        type: 'FOREIGN KEY',
        name: 'FK_ciclo_pesagem',
        references: {
          table: 'ciclos',
          field: 'cicloId',
        },
        onDelete: 'cascade',
        onUpdate: 'no action',
      }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pesagens');
  }
};