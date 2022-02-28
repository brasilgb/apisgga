'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      
    }
  }
  Category.init({
    categoryId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      field: "categoryId"
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};