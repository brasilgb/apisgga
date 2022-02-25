'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Products', {
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
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
    .then(() => queryInterface.addConstraint('Products', {
      fields: ['categoryId'],
      type: 'FOREIGN KEY',
      name: 'FK_category_product',
      references: {
        table: 'Categories',
        field: 'categoryId',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Products');

  }
};