const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  SellingPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ProductName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
