'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE'
      });
    }
  }
  Product.init({
    productId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "productId"
    },
    categoryId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "categoryId"
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};