'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recebimentos', {
      idRecebimento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cicloId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      loteId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      dataSearch: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      dataRecebimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      femea: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 3)
      },
      macho: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 3)
      },
      notaFiscal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('recebimentos', {
      fields: ['cicloId'],
      type: 'foreign key',
      name: 'fk_recebimentos_ciclos',
      references: {
        table: 'ciclos',
        field: 'idCiclo'
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recebimentos');
  }
};