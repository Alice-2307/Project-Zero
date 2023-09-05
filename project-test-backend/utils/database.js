const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Adity@11", {
  dialect: "mysql",
  host: "localhost",
});


module.exports = sequelize;
