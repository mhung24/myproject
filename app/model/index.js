const { Sequelize } = require("sequelize");

const { DB, USER, PASSWORD, HOST, dialect } = require("../config/db.config");
const { createUser } = require("./user");
const { createDatabase } = require("./database");
const { Categories } = require("./category");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const DataUsers = createUser(sequelize);
const Product = createDatabase(sequelize);
const Category = Categories(sequelize);

module.exports = {
  sequelize,
  DataUsers,
};
