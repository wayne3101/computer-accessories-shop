"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.CartItem, { foreignKey: "productId" });
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  Product.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: false },
      productImage: DataTypes.STRING,
      productName: DataTypes.STRING,
      productPrice: DataTypes.STRING,
      description: DataTypes.TEXT,
      categoryId: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
