'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emails', {
      emailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      servidor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      porta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seguranca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      remetente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      destinatario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      assunto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mensagem: {
        allowNull: false,
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
    await queryInterface.dropTable('Emails');
  }
};