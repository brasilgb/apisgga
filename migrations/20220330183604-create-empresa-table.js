'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      empresaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        allowNull: true,
        type: Sequelize.STRING
      },
      razao_social: {
        allowNull: true,
        type: Sequelize.STRING
      },
      segmento: {
        allowNull: true,
        type: Sequelize.STRING
      },
      endereco: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cidade: {
        allowNull: true,
        type: Sequelize.STRING
      },
      uf: {
        allowNull: true,
        type: Sequelize.CHAR
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      celular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empresas');
  }
};